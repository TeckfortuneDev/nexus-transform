// postbuild.js
// Copies docs/index.html to docs/404.html for SPA routing on GitHub Pages
// Ensures docs/CNAME is preserved after build
import { copyFileSync, existsSync } from 'fs';

try {
  copyFileSync('docs/index.html', 'docs/404.html');
  console.log('404.html created for SPA routing.');

  // Ensure CNAME is preserved
  if (existsSync('docs/CNAME')) {
    copyFileSync('docs/CNAME', 'docs/CNAME');
    console.log('CNAME file preserved.');
  } else {
    // Recreate CNAME if missing
    copyFileSync('CNAME', 'docs/CNAME');
    console.log('CNAME file restored from project root.');
  }
} catch (e) {
  console.error('Postbuild step failed:', e);
  process.exit(1);
}
