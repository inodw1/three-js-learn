import { init } from "./utils/initDroneLayer";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        init();
    }, []);
    return (
        <div className="App">
            <div className="hello">
                <h1 className="title">Hi, Welcome</h1>
                <p className="text">This is my first attempt to three js</p>
            </div>
        </div>
    );
}

export default App;
