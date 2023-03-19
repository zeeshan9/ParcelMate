import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Header from "./components/layout/Header";
import Inventory from "./pages/inventory";
import './assets/css/variables.css'
import AppContext from "./contexts/appContext";
import UpdateInventory from "./pages/update-inventory";
import UpdateOffers from "./pages/update-offers";
import Offers from "./pages/offers";
import { Dashboard } from "./pages/dashboard";

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
                    path="/update-inventory/:itemId"
                    element={<UpdateInventory />}
                  />
                  <Route
                    exact
                    path="/offers"
                    element={<Offers />}
                  />
                  <Route
                    exact
                    path="/offer/:offerId"
                    element={<UpdateOffers />}
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