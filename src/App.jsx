import './App.css'
import React from 'react'
import { BrowserRouter, Route, Links, Router } from "react-router-dom";
import './props.css'
import HomePage from './Pages/Home'
export default function App() {
  return (
      <BrowserRouter>
        <Route path="/"  component={HomePage} />
      </BrowserRouter>
  )
}
