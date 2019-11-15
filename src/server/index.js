import express from 'express';
import path from 'path';

import { serverRender } from './middlewares';

const app = express();

app.use(
    express.static(path.resolve('./build'), {
        index: false
    })
);

// middlewares
app.use(serverRender);

app.listen(8000, () => {
    console.log('Running on http://localhost:8000');
});
