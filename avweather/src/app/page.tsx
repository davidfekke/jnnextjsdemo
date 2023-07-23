import Head from 'next/head';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Avweather from '../components/avweather';

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
  
  const cookieStore = cookies()
  const airport_identifier = cookieStore.get('identifier')?.value ?? 'KCRG';
  let weather = await getWeather(airport_identifier);

  async function weatherAction(data: FormData) {
    "use server";
    const identifier = data.get("identifier")?.valueOf() as string;

    cookies().set({
        name: 'identifier',
        value: identifier,
        httpOnly: true,
        path: '/'
    });
  }
  
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
