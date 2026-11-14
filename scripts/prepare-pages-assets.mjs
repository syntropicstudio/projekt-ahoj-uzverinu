import { readFile, mkdir, writeFile } from 'node:fs/promises';

// Copy managed images into the deployment: published Pages has no Lovable runtime.
const origin = 'https://id-preview--370bc9cd-a397-4292-8d66-784635708e40.lovable.app';
await mkdir('public/pages-media', { recursive: true });
for (const name of ['facade-desktop.webp', 'facade-mobile.webp']) {
  const pointer = JSON.parse(await readFile(`src/assets/${name}.asset.json`, 'utf8'));
  const response = await fetch(new URL(pointer.url, origin));
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
    throw new Error(`Cannot download ${name}: ${response.status}`);
  }
  await writeFile(`public/pages-media/${name}`, new Uint8Array(await response.arrayBuffer()));
}