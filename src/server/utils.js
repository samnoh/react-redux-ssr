import path from 'path';
import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'))
    .files;

const chunks = Object.keys(manifest)
    .filter(key => /chunk\.js$/.exec(key))
    .map(key => `<script src="${manifest[key]}"></script>`)
    .join('');

export const createPage = (root, stateScript) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest['main.css']}" rel="stylesheet" />
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    ${root}
    </div>
    <script>__PRELOADED_STATE__ = ${stateScript}</script>
    <script src="${manifest['runtime-main.js']}"></script>
    ${chunks}
    <script src="${manifest['main.js']}"></script>
</body>
</html>`;
};
