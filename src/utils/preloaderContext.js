import { createContext, useContext } from 'react';

// resolve: () => {}
// null for client
// { done: false, promises: [] } for server

const PreloadContext = createContext(null);

export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);

    if (!preloadContext) return null;
    if (preloadContext.done) return null;

    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};

export const usePreloader = resolve => {
    const preloadContext = useContext(PreloadContext);

    if (!preloadContext) return null;
    if (preloadContext.done) return null;

    preloadContext.promises.push(Promise.resolve(resolve()));
};

export default PreloadContext;
