
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const TheScience = lazy(() => import("./pages/TheScience"));

function App() {

    return (
        <div className="nf bg-olive">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/the-science" element={<TheScience/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;