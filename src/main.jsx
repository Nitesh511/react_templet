import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';


createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
)
