import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { onImageError } from '../../utils/images';
import './styles.css';

const px = (v?: string | number) => (v === undefined ? undefined : /^\d+$/.test(String(v)) ? `${v}px` : String(v));

interface GalleryProps<T extends { src: string; bg?: string }> {
  images?: T[];
  width?: string | number;
  height?: string | number;
  radius?: string;
  showThumbs?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  fallbackSrc?: string;
  renderSlide?: (item: T, index: number) => ReactNode;
}

export default function Gallery<T extends { src: string; bg?: string }>({
  images = [], width, height, radius = '0px', showThumbs = false, showArrows = true, showDots = false, className = '', fallbackSrc, renderSlide,
}: GalleryProps<T>) {
  const [index, setIndex] = useState(0);
  const w = parseInt(String(width), 10);
  const h = parseInt(String(height), 10);
  const frame: CSSProperties = {
    width: px(width),
    maxWidth: '100%',
    aspectRatio: w && h && !renderSlide ? `${w} / ${h}` : undefined,
    height: w && h && !renderSlide ? undefined : px(height),
    borderRadius: radius,
  };

  return (
    <div className={`gallery ${className}`} style={{ width: px(width), maxWidth: '100%' }}>
      <div className="gallery__frame" style={frame}>
        <div className="gallery__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) =>
            renderSlide ? (
              <div key={i} className="gallery__slide">{renderSlide(img, i)}</div>
            ) : (
              <img
                key={`${img.src}-${i}`}
                src={img.src}
                alt={`Imagem ${i + 1}`}
                style={{ background: img.bg, objectFit: img.bg ? 'contain' : 'cover' }}
                onError={(e) => onImageError(e, fallbackSrc)}
              />
            )
          )}
        </div>
        {showArrows && (
          <>
            <button className="gallery__arrow gallery__arrow--left" disabled={index === 0} onClick={() => setIndex(index - 1)} aria-label="Imagem anterior">
              <img src={arrowLeft} alt="" />
            </button>
            <button className="gallery__arrow gallery__arrow--right" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)} aria-label="Próxima imagem">
              <img src={arrowRight} alt="" />
            </button>
          </>
        )}
        {showDots && (
          <div className="gallery__dots">
            {images.map((_, i) => (
              <button key={i} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} aria-label={`Ir para o slide ${i + 1}`} />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <button key={`${img.src}-${i}`} onClick={() => setIndex(i)} className={i === index ? 'is-selected' : ''} style={{ borderRadius: radius, background: img.bg }} aria-label={`Ver imagem ${i + 1}`}>
              <img src={img.src} alt="" width={117} height={95} style={{ borderRadius: radius, objectFit: img.bg ? 'contain' : 'cover' }} onError={(e) => onImageError(e, fallbackSrc)} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
