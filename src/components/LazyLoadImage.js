import React, { useRef, useState, useEffect } from 'react';
import PLACE_HOLDER from 'static/media/placeholder.png';

// 이미지 로딩 시점 (0.1 : 이미지가 1/10정도 나타난 시점에 로딩한다)
const THRESHOLD_IMAGE = 0.3;

const LazyLoadImage = (props) => {
  const imgRef = useRef(null); //  < HTMLImageElement > null; => typescript에서만 사용가능
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      setIsLoad(true);
    };
    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, [imgRef]);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: THRESHOLD_IMAGE,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  const { src, alt } = props;
  return <img ref={imgRef} src={isLoad ? src : PLACE_HOLDER} alt={alt} />;
};

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = 'LazyLoadImage';

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}

export default LazyLoadImage;
