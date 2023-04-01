import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import PageShell from '@components/common/PageShell';

const Page: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageShell
      title="Find & track the best free-to-play games!"
      subTitle="Search for what to play next!"
    >
      <div>Hello {id}</div>
    </PageShell>
  );
};

export default Page;
