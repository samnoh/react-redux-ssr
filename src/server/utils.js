export const createPage = (root, tags) => {
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
    ${tags.styles}
    ${tags.links}
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    ${root}
    </div>
    ${tags.scripts}
</body>
</html>`;
};
