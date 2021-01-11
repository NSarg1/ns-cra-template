import { memo } from "react";
import { ReactComponent as ReactLogo } from "assets/logo.svg";
const MemoLogo = memo(ReactLogo);
const App = () => {
    return (
        <div className="app">
            <main className="app__main">
                <h1 className="u-text-align--center">Welcome to React</h1>
                <h2>Find out whole beauty with right configuration</h2>
                <MemoLogo className="app__logo" />
            </main>
        </div>
    );
};

export default App;
