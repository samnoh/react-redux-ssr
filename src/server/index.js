import express from 'express';
import path from 'path';
import morgan from 'morgan';

import { serverRender } from './middlewares';

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(morgan('dev'));
app.use(
    express.static(path.resolve('./build'), {
        index: false
    })
);
app.use(serverRender);

app.listen(app.get('port'), () => {
    console.log(`Server has started port on ${app.get('port')}`);
});
