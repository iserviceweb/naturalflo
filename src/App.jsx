
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));

function App() {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    {/* <Route path="/services" element={<Services/>}/> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;