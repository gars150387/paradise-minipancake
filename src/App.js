import {
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { AppMain } from "./router/AppMain";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<AppMain />}></Route>
      <Route exact path="login" element={<Login />}></Route>
      <Route exact path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
