const path = require('path');
const CWD = process.cwd();

module.exports = {
  entry: [
    `${CWD}/less/index.less`,
    `${CWD}/less/detail.less`
  ],
  output: [
    `${CWD}/css/index.min.css`,
    `${CWD}/css/detail.min.css`
  ],
}