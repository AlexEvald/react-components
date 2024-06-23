import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import TestComponent from "./routes/test.component";
import TestOrchistretorComponent from "./routes/test.orchistretor.component";

function App() {


  return (
      <Routes>
          <Route path={'/'} element={<Navigation/>}>
              <Route index={true}  element={<Home/>}/>  {/* when the index is true when ever the parent path match then display this component also*/}
              <Route path='comp/*'  element={<TestOrchistretorComponent/>}/>
          </Route>
      </Routes>
  );
}

export default App;
