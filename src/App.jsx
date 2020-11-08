import './App.css'
import React from 'react'
import { BrowserRouter, Route, Links, Router } from "react-router-dom";
import './props.css'
import Home from './Pages/Home'
import AddPost from "./Pages/AddPost"
import AddInfo  from "./Pages/AddInfo"
export default function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/AddPost"  component={AddPost} />
        <Route path="/AddInfo"  component={AddInfo} />
      </BrowserRouter>
  )
}
