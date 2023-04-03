import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { GameType } from '@models/entities';

import styles from '@styles/components/common/GameCard.module.scss';
import Button from './Button';

type GameCardPropsType = {
  data: GameType;
};

const GameCard = ({ data }: GameCardPropsType) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        height: width,
      }}
      className={`${styles.gameCard} col-xl-3 col-lg-3 col-md-4 col-sm-6`}
    >
      <div
        className={`row ${styles.image}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${data.background_image})`,
        }}
      ></div>
      <div className={styles.content}>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.action}>
          <Button
            onClick={() => {
              router.push(`/${data.id}`);
            }}
          >
            View more
            <i className="fa fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
