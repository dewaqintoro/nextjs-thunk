import { Provider } from 'react-redux'
import { useStore } from '../store'


import 'antd/dist/antd.css'
// import '../styles/dashboard.css'
import '../styles/dew.css'
// import '../styles/global.css'
 
 
// import '../styles/card.css'
// import '../styles/mapku.css'
// import '../styles/table.css'
// import '../styles/infoBox.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../styles/Login.css'


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      {console.log("ini store",store)}
      <Component {...pageProps} />
    </Provider>
  )
}
