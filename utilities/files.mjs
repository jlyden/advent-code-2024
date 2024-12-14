import path from 'path';
import fs from 'fs';

function getFileContents(filename) {
  const source = path.resolve('input/' + filename);
  return fs.readFileSync(source, 'utf8').toString();
}

export { getFileContents };