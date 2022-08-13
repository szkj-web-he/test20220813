/**
 * @file useTransition的用法展示
 * @date 2022-08-13
 * @author xuejie.he
 * @lastModify xuejie.he 2022-08-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState, useTransition } from "react";
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

    const [isPending, setTransitionFn] = useTransition();

    const [value, setValue] = useState("");

    const [listEl, setListEl] = useState(
        countList.map((item, index) => {
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

    useEffect(() => {
        setTransitionFn(() => {
            setListEl(
                countList.map((item, index) => {
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
        });
    }, [countList, value]);

    return (
        <>
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
            {isPending ? "loading……" : listEl}
        </>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
