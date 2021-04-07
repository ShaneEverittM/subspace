import logo from "./resources/logo.svg";
import "./styles/App.css";
import {add} from "./native"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>{add(1, 2)}</p>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>public/electron.js</code> or <code>src/App.js</code> and
                    save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
