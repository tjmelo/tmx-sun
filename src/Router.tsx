import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Empty } from './components/empty';
import { Loading } from './components/loading';

const TmxMercury = React.lazy(() => import('TmxMercury/TmxMercury' as string));
const TmxMoon = React.lazy(() => import('TmxMoon/TmxMoon' as string));

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Empty />} />
        <Route exact path="/tmx-mercury" element={
            <Suspense fallback={<Loading />}>
                <TmxMercury />
            </Suspense>
        }/>
        <Route exact path="/tmx-moon" element={
            <Suspense fallback={<Loading />}>
                <TmxMoon />
            </Suspense>
        }/>
        <Route exact path="/tmx-venus" element={
            <Suspense fallback={<Loading />}>
                <iframe 
                    src="https://tmx-shoplist.netlify.app" 
                    title="tmx-venus"
                    width="100%"
                    height="150%"
                    scrolling='no'
                >    
                </iframe>
            </Suspense>
        }/>
    </Routes>
  );
}

export default Router;
