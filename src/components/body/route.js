import React from 'react';
import Body from './body';
import Jamin from './jamin';
import { Routes, Route } from 'react-router-dom';
import './body.css';

export default function AppRoutes() {
    return (
        <main id='main__route'>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/jamin/:name" element={<Jamin />} />
            </Routes>
        </main>
    );
}
