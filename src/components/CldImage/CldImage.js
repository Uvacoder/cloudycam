import { useRef } from 'react';

import { constructCldUrl } from '@lib/cloudinary';

import { useImageEvents } from '@hooks/useImageEvents';

import styles from './CldImage.module.scss';

const CldImage = ({
  src,
  width,
  height,
  resize,
  transformations,
  effects,
  watermark,
  event,
  alt,
  isLoading,
  ...props
}) => {
  const imageRef = useRef();

  const cldImageUrl = constructCldUrl({
    publicId: src,
    width: resize?.width || width,
    height: resize?.height || height,
    filters: [
      {
        transformations,
        effects,
      },
    ],
    applyWatermark: watermark,
    event,
  });

  const { loading, loaded } = useImageEvents({
    ref: imageRef,
    src: cldImageUrl,
  });

  return (
    <span
      className={styles.cldImage}
      data-image-loading={loading || isLoading}
      data-image-loaded={loaded && !isLoading}
    >
      <img ref={imageRef} width={width} height={height} src={cldImageUrl} loading="lazy" alt={alt} {...props} />
    </span>
  );
};

export default CldImage;
