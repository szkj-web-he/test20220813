/**
 * @file
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import { useEffect } from "react";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
    value: string;
    list: number[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ value, list }) => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [content, setContent] = useState<React.ReactNode[]>();

    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    useEffect(() => {
        setContent(
            list.map((item, index) => {
                const itemContent = value
                    ? item.toString().replaceAll(value, `--__${value}--__`)
                    : item.toString();
                const content = value ? itemContent.split("--__") : [itemContent];

                return (
                    <div key={index}>
                        content:
                        {content.map((val, n) => {
                            return (
                                <span
                                    style={val === value ? { color: "red" } : undefined}
                                    key={`${index}_${n}`}
                                >
                                    {val}
                                </span>
                            );
                        })}
                    </div>
                );
            }),
        );
    }, [value, list]);

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <div>{content}</div>;
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
