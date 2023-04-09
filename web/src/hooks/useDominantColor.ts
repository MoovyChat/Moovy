import { useMemo, useState } from 'react';

export const useDominantColor = (imageUrl: string): string | null => {
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  useMemo(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context?.drawImage(image, 0, 0);
      const imageData = context?.getImageData(
        0,
        0,
        image.width,
        image.height,
      ).data;
      const colorCounts: Record<string, number> = {};

      if (imageData) {
        // Loop through every pixel in the image and count the number of times each color appears
        for (let i = 0; i < imageData.length; i += 4) {
          const red = imageData[i];
          const green = imageData[i + 1];
          const blue = imageData[i + 2];
          const rgb = `rgb(${red},${green},${blue})`;

          if (colorCounts[rgb]) {
            colorCounts[rgb]++;
          } else {
            colorCounts[rgb] = 1;
          }
        }
      }

      // Find the color with the highest count (i.e. the dominant color)
      let maxCount = 0;
      let dominantColor = null;
      for (const color in colorCounts) {
        if (colorCounts[color] > maxCount) {
          dominantColor = color;
          maxCount = colorCounts[color];
        }
      }

      setDominantColor(dominantColor);
      canvas.remove();
    };
  }, [imageUrl]);

  return dominantColor;
};
