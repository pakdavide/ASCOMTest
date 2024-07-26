import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./Routes.const";
import { Patients } from "./pages/PatientsPage";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.Patients.home} element={<Patients />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default App;
