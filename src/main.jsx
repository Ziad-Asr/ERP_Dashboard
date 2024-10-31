import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// ################
// ### Packages ###
// ################
// @mui/material @emotion/react @emotion/styled
// @mui/x-data-grid @mui/icons-material
// react-router-dom@6
// react-pro-sidebar
// formik yup
// @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list
// @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo
