import desktop from '@/assets/facade-desktop.webp.asset.json';
import mobile from '@/assets/facade-mobile.webp.asset.json';

// Pages uses downloaded, local copies. Lovable preview uses the managed pointers.
const localAssets = import.meta.env.VITE_PAGES_BUILD === 'true';
export const facadeDesktop = localAssets ? `${import.meta.env.BASE_URL}pages-media/facade-desktop.webp` : desktop.url;
export const facadeMobile = localAssets ? `${import.meta.env.BASE_URL}pages-media/facade-mobile.webp` : mobile.url;