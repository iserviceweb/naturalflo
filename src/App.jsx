
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";


// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const HairID = lazy(() => import("./pages/HairID"));
const Products = lazy(() => import("./pages/Products"));
 
function App() {

    return (
        <div className="nf bg-skyblue min-h-screen">
            {/* <LoadingPage/> */}
            <Suspense fallback={<LoadingPage/>}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/hair-id" element={<HairID/>} />
                    <Route exact path="/products" element={<Products/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;