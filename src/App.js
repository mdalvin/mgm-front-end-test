import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/detail" component={DetailPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
