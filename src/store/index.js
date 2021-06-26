import { createStore, applyMiddleware,compose} from "redux";

//使用redux-thunk中间件（redux的中间件）
import thunk from 'redux-thunk';

//引入reducer
import reducer from './reducer';

//这些配置是为了使用redux-devTools调试工具和同时使用thunk 中间件
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);


//创建store
const store = createStore(reducer,enhancer);

export default store;