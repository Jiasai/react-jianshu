import Header from "./common/header";

//引入Provider连接器和store
import { Provider } from "react-redux";
import store from './store/index';


function App() {
  return (
    <Provider store = {store}>
      <Header />
      </Provider>
  );
}

export default App;
