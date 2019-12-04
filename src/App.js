import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Counter from "./containers/counter";
// import Posts from "./containers/posts";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Counter />
    </Provider>
  );
}

export default App;
