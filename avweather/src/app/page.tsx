import Head from 'next/head';
import { revalidatePath } from 'next/cache'
import Avweather from '../components/avweather';

var weather = await getWeather('KCRG');

async function weatherAction(data: FormData) {
  "use server";
  const identifier = data.get("identifier")?.valueOf() as string;
  console.log(identifier);
  weather = await getWeather(identifier)
  revalidatePath('/')
}

async function getWeather(identifier: string = 'kcrg') {
  const response = await fetch(`https://avwx.fekke.com/metar/${identifier}`);
  const weatherArray = await response.json();
  if (weatherArray && weatherArray.length > 0) {
    return weatherArray[0];
  } else {
    return { raw_data: 'No weather' };
  }
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Head>
        <title>Aviation Weather</title>
      </Head>
      <h1 className="text-5xl">Hello, World!</h1>
        <form action={weatherAction}>
          <input className="text-black" type="text" id="identifier" name="identifier" /><br />
          <button type="submit">Get Weather</button>
        </form>
      <div>
      <Avweather {...weather} />
      </div>
    </main>
  )
}
