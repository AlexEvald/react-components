import {Route, Routes} from "react-router-dom";
import OrchestratorComponent from "./orchestrator.component";


const HigherComponent = () => {

    return (
        <Routes>
            <Route path=":category" element={<OrchestratorComponent/>}/>
        </Routes>
    )


}

export default HigherComponent;