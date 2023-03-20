import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import './assets/css/variables.css'
import './assets/css/common.css'
import './App.css';
import Header from "./components/layout/Header";
import Inventory from "./pages/inventory";
import AppContext from "./contexts/appContext";
import UpdateInventory from "./pages/update-inventory";
import UpdateOffers from "./pages/update-offers";
import Offers from "./pages/offers";
import { Dashboard } from "./pages/dashboard";
import * as Sentry from "@sentry/react";
import NotFound from "./pages/not-found";
import FallbackComponent from "./components/ui/fallback";

const myFallback = <FallbackComponent />;

function App() {
  const [data, setData] = useState({});
    
  return (
    <Sentry.ErrorBoundary fallback={myFallback} showDialog>
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
                            <NotFound></NotFound>
                          </div>
                        }
                      />
              </Routes>
            </Container>
          </AppContext.Provider>
      </Router>
      </Sentry.ErrorBoundary>
  );
}

export default App;


const Container = styled.div`
    height: 100%;
    position: relative;
    top: 11vh;
    padding: 0vh 15vw;
`