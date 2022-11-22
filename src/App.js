import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import UserContext from "./state/UserContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  let state = {
    account: {}
  }
  
  return (
      <>
        <UserContext.Provider value={state}>
          <main className="main">
            <HashRouter>
              <NavBar/>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </HashRouter>
          </main>
        </UserContext.Provider>
        <Footer />
      </>
  );
}

export default App;
