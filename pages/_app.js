import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/uno-ds/src/styles/app.scss'
import '../styles/globals.css'
import {SideBar} from "uno-ds"

function MyApp({ Component, pageProps }) {
  return <div className='wrapper'>
    <SideBar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
