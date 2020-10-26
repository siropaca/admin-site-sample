import Link from 'next/link';
import useSWR from 'swr';

export default function Index() {
  const { data, error } = useSWR('/api/hello', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Welcome to Next.js!!!!</h1>
      <br />
      <Link href="/login">[ ログインへ ]</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://httpbin.org/get');
  const data = await res.json();

  return {
    props: {
      layout: true,
      data
    }
  };
}
