/**
 * @file flushSync的用法展示
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count");
    }, [count]);
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    return (
        <div>
            <button
                onClick={() => {
                    //这里会被监听到两次
                    flushSync(() => {
                        setCount((pre) => pre + 1);
                    });
                    setCount((pre) => pre + 1);
                }}
            >
                加加
            </button>
            <button
                onClick={() => {
                    //这里会被监听到1次
                    setCount((pre) => pre - 1);
                    setCount((pre) => pre - 1);
                }}
            >
                减减
            </button>

            <div>count:{count}</div>
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
