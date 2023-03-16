import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Header from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import Inventory from "./pages/inventory";
import Offers from "./pages/Offers";
import UpdateInventory from "./pages/UpdateInventory";
import './assets/css/variables.css'
import AppContext from "./contexts/appContext";

function App() {
  const [data, setData] = useState({});

  return (
    <Router>
        <AppContext.Provider value={{ data, setData }}>
          <Header />
          <Container>
            <Routes>
                  <Route
                    exact
                    path="/dashboard"
                    element={<Dashboard/>}
                  />
                  <Route
                    exact
                    path="/inventory"
                    element={<Inventory/>}
                  />
                  <Route
                    exact
                    path="/update-inventory"
                    element={<UpdateInventory />}
                  />
                  <Route
                    exact
                    path="/offers"
                    element={<Offers />}
                  />

                  <Route path="/" element={<Navigate replace to="/dashboard" />} />
                  <Route
                      path="*"
                      element={
                        <div className="not-found">
                          <h2>404 Page not found</h2>
                        </div>
                      }
                    />
            </Routes>
          </Container>
        </AppContext.Provider>
      </Router>
  );
}

export default App;


const Container = styled.div`
    height: 100%;
    position: relative;
    top: 11vh;
    padding: 0vh 15vw;
`