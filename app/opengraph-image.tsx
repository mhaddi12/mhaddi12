import { OgCard, ogContentType, ogSize } from '@/lib/og-card';

export const alt = 'Muhammad Haddi, Flutter developer in Lahore';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return OgCard();
}
