import { cn } from '@/shared/utils';
import Image, { ImageProps } from 'next/image';

type AvatarSize = 'xs' | 'sm' | 'bg';

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
  bg: 'h-28 w-28',
};

export const AvatarImage = ({
  src,
  alt,
  size = 'xs',
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-(--color-border) border',
        avatarSize[size]
      )}
    >
      <Image {...rest} src={src} alt={alt} fill />;
    </div>
  );
};
