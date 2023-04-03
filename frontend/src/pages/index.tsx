import { NextPage } from 'next';

import PageShell from '@components/common/PageShell';
import { SearchBar } from '@components/common/SearchBar';
import Toolbar from '@components/common/Toolbar';
import GameList from '@components/containers/game/GameList';

import {
  useGameListContext,
  withGameListContextProvider,
} from '@contexts/GameListContext';

const Page: NextPage = () => {
  const {
    data,
    isLoading,
    genre,
    setSearch,
    setPlatform,
    setGenre,
    setSortBy,
  } = useGameListContext();
  return (
    <PageShell
      title="Find & track the best free-to-play games!"
      subTitle="Search for what to play next!"
    >
      <div className="row">
        <div className="col-center">
          <SearchBar handleChange={setSearch} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Toolbar
            {...{
              genre,
              setPlatform,
              setGenre,
              setSortBy,
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-center">
          <GameList {...{ data, isLoading }} />
        </div>
      </div>
    </PageShell>
  );
};

export default withGameListContextProvider(Page);
