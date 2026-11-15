import type { SyntheticEvent } from 'react';

// Imagem neutra mostrada quando um arquivo não é encontrado (nunca a foto de outro produto).
export const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="#F5F5F5"/><text x="300" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#8F8F8F">Imagem indisponível</text></svg>'
  );

// Use em <img onError={(e) => onImageError(e)} />.
// 1) tenta a imagem de reserva (se informada); 2) usa a imagem neutra; 3) avisa no Console qual arquivo faltou.
export function onImageError(e: SyntheticEvent<HTMLImageElement>, fallback?: string) {
  const img = e.currentTarget;
  console.warn('[Digital Store] Imagem não encontrada:', img.getAttribute('src'));
  if (!img.dataset.fb && fallback) {
    img.dataset.fb = '1';
    img.src = fallback;
    return;
  }
  if (img.dataset.fb !== '2') {
    img.dataset.fb = '2';
    img.src = PLACEHOLDER;
  }
}
