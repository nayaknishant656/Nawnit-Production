import React from 'react'
import Body from './body'
import Navigation from './navigation/navigation'
import Jamin from "./jamin"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./body.css"

export default function route() {
    return (
        <>
            <main id='main__route'>
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route exact path="/jamin" element={<Jamin />} />
                </Routes>
            </main>

        </>
    )
}
