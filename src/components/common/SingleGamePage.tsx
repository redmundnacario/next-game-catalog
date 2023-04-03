import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import React from 'react';

import { SingleGameWithImagesType } from '@models/entities';
import { Button } from './Button';

import styles from '@styles/components/common/SingeGamePage.module.scss';

type SingleGamePageType = {
  data: SingleGameWithImagesType;
};

const SingleGamePage: React.FC<SingleGamePageType> = ({ data }) => {
  const router = useRouter();
  const images = data.images;
  return (
    <div className={styles.singleGamePage}>
      <div className={styles.rowSingleGame}>
        <div
          className={`${styles.imageContainer} col-xl-6 col-lg-6 col-md-12 col-sm-12`}
        >
          <Image
            src={images[0].image}
            alt={data.slug}
            layout="fill"
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.description} col-xl-6 col-lg-6 col-md-12 col-sm-12`}
        >
          <div>
            <h1>{data.name}</h1>
            <div>{data.description_raw}</div>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => {
                  router.push('/');
                }}
              >
                <i className="fa fa-chevron-left"></i>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rowSingleGame}>
        <div
          className={`${styles.imageContainerSmall} col-xl-4 col-lg-4 col-md-12 col-sm-12`}
        >
          <Image
            src={images[1].image}
            alt={data.slug}
            layout="fill"
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.imageContainerSmall} col-xl-4 col-lg-4 col-md-12 col-sm-12`}
        >
          <Image
            src={images[2].image}
            alt={data.slug}
            layout="fill"
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.imageContainerSmall} col-xl-4 col-lg-4 col-md-12 col-sm-12`}
        >
          <Image
            src={images[3].image}
            alt={data.slug}
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleGamePage;
