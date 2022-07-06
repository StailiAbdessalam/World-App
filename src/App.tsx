import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NotFound from "../src/pages/NotFound";
import About from "../src/pages/About";
import Layout from "./layout/layout";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/a-propos" exact >
          <Layout>
            <About />
          </Layout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
