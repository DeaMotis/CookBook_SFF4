import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Recipe from './components/Recipe';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;