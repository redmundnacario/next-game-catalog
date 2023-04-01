import React from 'react';

import styles from '@styles/components/common/SearchBar.module.scss';

export const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal('');
  };

  // const filteredProducts = props.products.filter((game) => {
  //   return game.includes(searchVal);
  // });

  return (
    <div className={`${styles.searchBar}`}>
      <i className="fa fa-search"></i>
      <label htmlFor="game-search" id="input-label" hidden>
        Product Search
      </label>
      <input
        onChange={(e) => handleInput(e)}
        value={searchVal}
        type="text"
        name="game-search"
        id="game-search"
        placeholder="Search Games"
        className={styles.gameSearch}
      />
      <i onClick={handleClearBtn} className="fa fa-times"></i>
    </div>
  );
};
