/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * @file
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
const Home = React.lazy(() => import(/* webpackChunkName: 'HomePage' */ "../Pages/Home"));
const About = React.lazy(() => import(/* webpackChunkName: 'OverView' */ "../Pages/About"));
const HookTransition = React.lazy(
    () => import(/* webpackChunkName: 'OverView' */ "../Pages/Transition"),
);
const HookDeferred = React.lazy(
    () => import(/* webpackChunkName: 'OverView' */ "../Pages/Deferred"),
);
const HookFlushSync = React.lazy(
    () => import(/* webpackChunkName: 'OverView' */ "../Pages/FlushSync"),
);

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Suspense fallback={<>加载中……</>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="hook-useTransition" element={<HookTransition />} />
                    <Route path="hook-useDeferredValue" element={<HookDeferred />} />
                    <Route path="hook-flushSync" element={<HookFlushSync />} />
                </Route>
                <Route path="*" element={<>404</>} />
            </Routes>
        </Suspense>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
