import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './route';
import React, { useState } from 'react';

function App() {
    const [product, setProduct] = useState([]);
    const handleProduct = (item) => {
        setProduct(item);
    };
    console.log(product);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page handleProduct={handleProduct} />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
