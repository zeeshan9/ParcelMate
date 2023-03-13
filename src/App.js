import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Header from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import Inventory from "./pages/inventory";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;


const Container = styled.div`
    height: 100%;
    position: relative;
    top: 11vh;

`