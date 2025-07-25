// postbuild.js
// Copies docs/index.html to docs/404.html for SPA routing on GitHub Pages
import { copyFileSync } from 'fs';

try {
  copyFileSync('docs/index.html', 'docs/404.html');
  console.log('404.html created for SPA routing.');
} catch (e) {
  console.error('Failed to create 404.html:', e);
  process.exit(1);
}
