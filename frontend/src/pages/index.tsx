// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@styles/Home.module.css';

import { NextPage } from 'next';
import useFetchGame from '@hooks/useFetchGame';

// const inter = Inter({ subsets: ['latin'] });

const Page: NextPage = () => {
  // const { gamesList, isLoading, error } = useFetchGame({});
  const { gamesList, isLoading, error } = useFetchGame({ id: 452 });
  console.log(gamesList);
  console.log(isLoading);
  console.log(error);
  // useEffect(() => {
  //   void getGameById(452);
  // }, []);
  return <div>Hello</div>;
};

export default Page;
