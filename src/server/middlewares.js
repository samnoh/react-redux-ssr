import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';

import App from 'App';
import { createPage } from './utils';
import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';
import PreloadContext from 'utils/preloaderContext';

const loadableStatsFile = path.resolve('./build/loadable-stats.json');

export const serverRender = async (req, res) => {
    const preloadContext = {
        done: false,
        promises: []
    };

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

    const routerContext = {};

    const extractor = new ChunkExtractor({ statsFile: loadableStatsFile });

    const markup = (
        <ChunkExtractorManager extractor={extractor}>
            <StaticRouter location={req.url} context={routerContext}>
                <PreloadContext.Provider value={preloadContext}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </PreloadContext.Provider>
            </StaticRouter>
        </ChunkExtractorManager>
    );

    ReactDOMServer.renderToStaticMarkup(markup);
    store.dispatch(END);

    if (routerContext.statusCode) {
        res.status(routerContext.statusCode);
    }

    try {
        await sagaPromise;
        await Promise.all(preloadContext.promises);
    } catch (e) {
        return res.status(500);
    }

    preloadContext.done = true;

    const root = ReactDOMServer.renderToString(markup);
    const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
    const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;

    const tags = {
        scripts: stateScript + extractor.getScriptTags(),
        links: extractor.getLinkTags(),
        styles: extractor.getStyleTags()
    };

    res.send(createPage(root, tags));
};
