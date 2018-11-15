import gulp from 'gulp';

import opn from 'opn';

export default function open(port) {
  console.log(`OPEN http://localhost:${port}`);
  opn(`http://localhost:${port}`, { wait: false });
}
