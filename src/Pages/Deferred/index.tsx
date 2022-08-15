/**
 * @file useDeferredValue的用法展示
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useDeferredValue, useState } from "react";
import Memo from "./Unit/memo";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
    const [countList, setCountList] = useState(() => {
        return new Array(Math.round(Math.random() * 5000 + 1000)).fill(
            Math.random() * 500 + 200,
        ) as Array<number>;
    });

    const [value, setValue] = useState("");

    const deferredValue = useDeferredValue(value);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <button
                onClick={() => {
                    setCountList(() => {
                        return new Array(Math.round(Math.random() * 7000 + 3000)).fill(
                            Math.random() * 500 + 200,
                        ) as Array<number>;
                    });
                }}
            >
                reset
            </button>
            <div>
                <input
                    type="text"
                    onInput={(e) => {
                        setValue(e.currentTarget.value.trim());
                    }}
                />
            </div>
            <Memo value={deferredValue} list={countList} />
        </div>
    );
};

/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
