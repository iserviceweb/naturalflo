
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";


// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const HairID = lazy(() => import("./pages/HairID"));
const Products = lazy(() => import("./pages/Products"));
const PaymentSummary = lazy(() => import("./pages/PaymentSummary"));
const ProductPreview = lazy(() => import("./pages/ProductPreview"));

function App() {

    return (
        <div className="nf bg-skyblue min-h-screen">
            {/* <LoadingPage/> */}
            <Suspense fallback={<LoadingPage/>}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/hair-id" element={<HairID/>} />
                    <Route exact path="/products" element={<Products/>} />
                    <Route exact path="/products/preview/:preview" element={<ProductPreview/>} />
                    <Route exact path="/payment-summary" element={<PaymentSummary/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;