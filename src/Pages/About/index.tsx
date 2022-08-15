/**
 * @file
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useMemo } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const location = useLocation();

    const navigate = useNavigate();

    const navs = useMemo(() => {
        const arr = [
            {
                path: "/about/hook-useTransition",
                name: "useTransition",
            },
            {
                path: "/about/hook-useDeferredValue",
                name: "useDeferredValue",
            },
            {
                path: "/about/hook-flushSync",
                name: "flushSync",
            },
        ];
        let n = -1;
        for (let i = 0; i < arr.length; ) {
            const item = arr[i];
            if (item.path === location.pathname) {
                n = i;
                i = arr.length;
            } else {
                ++i;
            }
        }
        if (n >= 0) {
            arr.splice(n, 1);
        }
        return arr;
    }, [location.pathname]);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    useEffect(() => {
        if (location.pathname === "/about") {
            navigate("hook-useTransition", { replace: true });
        }
    }, [location, navigate]);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */

    return (
        <div>
            <h3>{location.pathname.replace("/", "")}</h3>
            <div>
                {navs.map((item, n) => {
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={
                                n < navs.length - 1
                                    ? {
                                          marginRight: "15px",
                                      }
                                    : undefined
                            }
                        >
                            {item.name}
                        </NavLink>
                    );
                })}
            </div>

            <Outlet />
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
