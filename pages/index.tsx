import Link from 'next/link';
import useSWR from 'swr';
import { InferGetServerSidePropsType } from 'next';

export default function Index() {
  const { data, error } = useSWR('/api/hello', fetch);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <main>
        <h1>Welcome to Next.js!</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://httpbin.org/get');
  const data = await res.json();
  console.log(context);
  console.log(data);

  return { props: { data } };
}
