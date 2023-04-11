import * as crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const key = crypto.randomBytes(32);
const iv = Buffer.alloc(16);;

export const encrypt = (
  text: string
): { iv: string; encryptedData: string } => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

export const decrypt = (text: {
  iv: string;
  encryptedData: string;
}): string => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key),
    Buffer.from(text.iv, 'hex')
  );
  let decrypted = decipher.update(Buffer.from(text.encryptedData, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
