import { ReactComponent as ReactLogo } from "src/assets/logo.svg";
import "./app.scss";

const App = () => {
   return (
      <div className="app">
         <main className="app__main">
            <h1 className="u-text-align--center">Welcome to React</h1>
            <h2>Find out whole beauty with right configuration</h2>
            <ReactLogo className="app__logo" />
         </main>
      </div>
   );
};

export default App;
