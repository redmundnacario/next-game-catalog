// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@styles/Home.module.css';

import { NextPage } from 'next';
// import useFetchGame from '@hooks/useFetchGame';
import PageShell from '@components/common/PageShell';
import { SearchBar } from '@components/common/SearchBar';
import Toolbar from '@components/common/Toolbar';

// const inter = Inter({ subsets: ['latin'] });

const Page: NextPage = () => {
  // const { gamesList, isLoading, error } = useFetchGame({});
  // const { gamesList, isLoading, error } = useFetchGame({});
  // console.log(gamesList);
  // console.log(isLoading);
  // console.log(error);
  // // useEffect(() => {
  //   void getGameById(452);
  // }, []);
  return (
    <PageShell
      title="Find & track the best free-to-play games!"
      subTitle="Search for what to play next!"
    >
      <div className="row">
        <div className="col-center">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-center">
          <Toolbar />
        </div>
      </div>
    </PageShell>
  );
};

export default Page;
