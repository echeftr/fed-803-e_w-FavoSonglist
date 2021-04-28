// import React from "react";
import "./App.css";
// import Container from "./Container";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Favo Song-Saver</h1>
//       </header>
//       <main>
//         <Container />
//       </main>
//     </div>
//   );
// }

import React from "react";

import Nav from "./components/Nav";
import Container from "./Container"
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
//         <h1>Favo Song-Saver</h1>
//       </header>
        <Nav />
        <Switch>
          <Route path="/home" exact component={App} />
          <Route path="/about" component={About} />

          <main>
            <Container />
          </main>
        </Switch>
      </div>
    </Router>
  );
}



export default App;