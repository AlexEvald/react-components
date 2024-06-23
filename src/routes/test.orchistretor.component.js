import {Route, Router, Routes} from "react-router-dom";
import TestComponent from "./test.component";


const TestOrchistretorComponent = () => {

    return (
        <Routes>
            <Route path=":category" element={<TestComponent/>}/>
        </Routes>
    )


}

export default TestOrchistretorComponent;