import Main from "./Main";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import "./global.scss";
const el = document.getElementById("root");
el &&
    createRoot(el).render(
        <StrictMode>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </StrictMode>,
    );
