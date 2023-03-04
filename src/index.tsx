import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { PersistGate } from 'redux-persist/integration/react'
import { SelectedProjectProvider } from './context'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    {/* redux tooltik数据导入 */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* selectedProject数据导入 */}
        <SelectedProjectProvider>
          <App />
        </SelectedProjectProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
reportWebVitals()
