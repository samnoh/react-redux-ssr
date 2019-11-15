'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');
const chalk = require('react-dev-utils/chalk');

function build() {
    console.log(chalk.green('Creating server build...'));
    fs.emptyDirSync(paths.ssrBuild);
    let compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                console.log(chalk.red(err));
                return;
            }
            console.log(stats.toString() + '\n');
        });
    });
}

build();
