export type SingleGameType = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  background_image: string;
  background_image_additional: string;
  rating: number;
  description_raw: string;
};

export type SingleGameWithImagesType = SingleGameType & {
  images: SingleGameImagesListType;
};

export type SingleGameImagesType = {
  id: number;
  image: string;
  width: number;
  height: number;
};

export type SingleGameImagesListType = Array<SingleGameImagesType>;
