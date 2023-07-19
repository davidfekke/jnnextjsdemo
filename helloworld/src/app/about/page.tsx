import Head from 'next/head';

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Head>
            <title>About</title>
        </Head>
        <h1 className="text-5xl">About this web site.</h1>
      </main>
    )
  }