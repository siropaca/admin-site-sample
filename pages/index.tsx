import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>{process.env.API_KEY}</div>
      </main>
    </div>
  );
}
