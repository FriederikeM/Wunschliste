import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllUsersLists from "./components/AllUsersLists";
import SingleUserList from "./components/SingleUserList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lists">
            <AllUsersLists />
          </Route>
          <Route exact path="/lists/:user">
            <SingleUserList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
