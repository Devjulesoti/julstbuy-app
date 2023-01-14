import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Switch, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
function App() {
  return (
    <>
     <Navbar />
     {/* <Switch> */}
      {/* <Home exact path= "/" component = {Home} /> */}
      {/* <Home exact path= "/products" component = {Products} /> */}
     {/* </Switch> */}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/products" element = {<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
