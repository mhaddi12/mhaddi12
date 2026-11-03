import { OgCard, ogContentType, ogSize } from '@/lib/og-card';

export const dynamic = 'force-static';

export const alt = 'Muhammad Haddi, Founder and CEO of HaddiDev';
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return OgCard();
}
