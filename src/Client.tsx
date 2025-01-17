import React, { Suspense } from 'react';
import { useLocation } from 'react-router';
import { Empty } from './components/empty';
import { Loading } from './components/loading';

const TmxMercury = React.lazy(() => import('TmxMercury/TmxMercury' as string));
const TmxMoon = React.lazy(() => import('TmxMoon/TmxMoon' as string));

function Client() {
  const { pathname } = useLocation();
  
  return (
    <Suspense fallback={<Loading />}>
      {pathname === '/' && <Empty />}
      {pathname.includes('/tmx-mercury') && <TmxMercury />}
      {pathname.includes('/tmx-venus') && <Empty />}
      {pathname.includes('/tmx-earth') && <Empty />}
      {pathname.includes('/tmx-moon') && <TmxMoon />}
    </Suspense>
  );
}

export default Client;
