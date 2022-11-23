import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import AccountContext from "./state/AccountContext";
import PageContext from "./state/PageContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useState} from "react";
import CreateAccount from "./pages/CreateAccount";

function App() {
  
  const [account, setAccount] = useState({});
  const accountValue = {account, setAccount};
  const [activePage, setActivePage] = useState('home');
  const pageValue = {activePage, setActivePage};
  
  return (
      <>
        <PageContext.Provider value={pageValue}>
          <AccountContext.Provider value={accountValue}>
            <main className="main">
              <HashRouter>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login/" element={<Login />} />
                  <Route path="/CreateAccount/" element={<CreateAccount />} />
                </Routes>
              </HashRouter>
              <Footer />
            </main>
          </AccountContext.Provider>
        </PageContext.Provider>
      </>
  );
}

export default App;
