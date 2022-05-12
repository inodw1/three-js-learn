import { init } from "./utils/initDroneLayer";
import { animate } from "./utils/main";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        init();
        // animate();
    }, []);
    return (
        <div className="App">
            <div className="intro">
                <h1 className="title">Hi, Welcome</h1>
                <p className="text">I'm Inod Wagachchi</p>
                <p className="text">This is my first attempt to three js</p>
            </div>

            <div className="details">
                <h1>Early stage planning. Win projects with smart workflows</h1>
                <div className="details-table">
                    <div className="details-card">
                        <p className="title">Better</p>
                        <p className="info">
                            Better projects using data-driven models & analysis
                            to understand risks and opportunities.
                        </p>
                    </div>
                    <div className="details-card">
                        <p className="title">Faster</p>
                        <p className="info">
                            Speed up the feasibility study process by 75% with
                            the power of AI generative design.
                        </p>
                    </div>
                    <div className="details-card">
                        <p className="title">Transparent</p>
                        <p className="info">
                            Design, share files, review proposals, and
                            collaborate in an online 3D environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
