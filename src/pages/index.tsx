import { GetServerSideProps } from "next"

type Props = {
  count: number;
};

export default function Home({ count }: Props) {
  return (
    <h1>Contagem: { count }</h1>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();

  return {
    props: {
      count: data.count,
    }
  }
}