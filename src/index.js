#! /usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk')
const lessc = require('less');
const rootPath = path.resolve();
const { entry, output } = require(`../less.config`);

entry.forEach(async (item, index) => {
  const result = fs.readFileSync(item, 'utf-8');
  lessc.render(result, { compress: true }, async (err, result) => {
    if (err) {
      console.log(err, result, 'err===');
      return;
    }
    console.log(chalk.red('less编译成功'), result);
    await fs.ensureDir('./css')
    fs.writeFile(output[index], result.css);
  });
});