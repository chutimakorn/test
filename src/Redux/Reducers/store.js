import { createStore, applyMiddleware } from 'redux'
import { routeReducer } from './routeReducer'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, routeReducer)
const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(logger))
  console.log("PERSIS_IN_Store",store);
  let persistor = persistStore(store) 
  console.log("RRETURN_PERSIS_IN_Store",persistor);

  return { store, persistor }
}
export default configureStore