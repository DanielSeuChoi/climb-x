// ImageList.tsx
import Image from 'next/image';
import { ImageData } from '@/lib/types';

interface ImageListProps {
  images: ImageData[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      {images.map((imageData) => (
        <div key={imageData.id}>
          {/* Use the Next.js Image component */}
          <Image src={imageData.url} alt={imageData.alt} width={300} height={200} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
