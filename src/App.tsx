import React from 'react'
import './App.scss'
import { HostMenu } from './components/menu'
import { useLocation } from 'react-router';
const TmxMercury = React.lazy(() => import('TmxMercury/TmxMercury' as string))

function App() {
  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <section className='container'>
      <div className='row'>
        <div className="col-2">
          <HostMenu />
        </div>
        <div className="col-10">
          { pathname.includes('/tmx-mercury') && <TmxMercury /> }
          { pathname.includes('/tmx-venus') && <h2>Awaiting TMX Venus component</h2> }
          { pathname.includes('/tmx-earth') && <h2>Awaiting TMX Earth component</h2> }
          { pathname.includes('/tmx-moon') && <h2>Awaiting TMX Moon component</h2> }
        </div>
      </div>
    </section>
  )
}

export default App
