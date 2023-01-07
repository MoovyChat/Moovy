export function getSupportedMimeTypes(
  media: string,
  types: string[],
  codecs: string[]
) {
  const isSupported = MediaRecorder.isTypeSupported;
  const supported: string[] = [];
  types.forEach((type: string) => {
    const mimeType = `${media}/${type}`;
    codecs.forEach((codec) => {
      const variation = `${mimeType};codecs=${codec}`;
      if (isSupported(variation)) supported.push(variation);
    });
    if (isSupported(mimeType)) supported.push(mimeType);
  });
  return supported;
}
