import React from 'react'
import { HostMenu } from './components/menu'
import { useLocation } from 'react-router';
import { Empty } from './components/empty';
const TmxMercury = React.lazy(() => import('TmxMercury/TmxMercury' as string))

function App() {
  const { pathname } = useLocation();

  return (
    <section className='container'>
      <div className='row'>
        <div className="col-md-2">
          <HostMenu />
        </div>
        <div className="col-md-10">
          { pathname === '/' && <Empty /> }
          { pathname.includes('/tmx-mercury') && <TmxMercury /> }
          { pathname.includes('/tmx-venus') && <Empty /> }
          { pathname.includes('/tmx-earth') && <Empty /> }
          { pathname.includes('/tmx-moon') && <Empty /> }
        </div>
      </div>
    </section>
  )
}

export default App
