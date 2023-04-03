import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import PageShell from '@components/common/PageShell';
import Game from '@components/containers/game/Game';

const Page: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined || Array.isArray(id)) {
    return <div>No games matched that id.</div>;
  }

  return (
    <PageShell
      title="Find & track the best free-to-play games!"
      subTitle="Search for what to play next!"
    >
      <div className="row">
        <div className="col-center">
          <Game id={id} />
        </div>
      </div>
    </PageShell>
  );
};

export default Page;
