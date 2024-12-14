import path from 'path';
import fs from 'fs';

function getContents(filename, returnLimit = null, splitter = '\r\n') {
  const source = path.resolve('input/' + filename);
  const contents = fs.readFileSync(source, 'utf8').toString().split(splitter);
  return returnLimit ? contents.splice(0, returnLimit) : contents;
}

export { getContents };