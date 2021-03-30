import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";

// REDUX TOOLS
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "src/redux/store";
// AXIOS CONFIG INIT
import "src/configs/axios.config";

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <PersistGate persistor={persistor}>
            <App />
         </PersistGate>
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);
