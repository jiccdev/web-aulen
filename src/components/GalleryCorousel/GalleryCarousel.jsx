import React from 'react';
import ImageGallery from 'react-image-gallery';

const GalleryCarousel = ({ items }) => {
  const getImages = () =>
    items?.images
      ? items?.images?.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      : [];

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={false}
      showThumbnails={true}
      thumbnailPosition="left"
      items={getImages()}
    />
  );
};

export default GalleryCarousel;
