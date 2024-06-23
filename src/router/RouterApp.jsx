import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../app";
import AirbnbHomes from "../screens/airbnbHomes";
import guests from "../screens/guests";
import destinations from "../screens/destination";
import dates from "../screens/dates";
import Currency from "../screens/Currency";
import CompanyDetails from "../screens/CompanyDetails";
import PrivacyTerms from "../screens/PrivacyTerms";
import Sitemap from "../screens/Sitemap";
import Filters from "../screens/Filters";
import Taxes from "../screens/Taxes";
import Maps from "../screens/Maps";
import Support from "../screens/Support";
import Stays from "../screens/stays";
import Experiences from "../screens/Experiences";

function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/homes" Component={AirbnbHomes} />
        <Route path="/guests" Component={guests} />
        <Route path="/destinations" Component={destinations} />
        <Route path="/dates" Component={dates} />
        <Route path="/currency" Component={Currency} />
        <Route path="/details" Component={CompanyDetails} />
        <Route path="/privacyterms" Component={PrivacyTerms} />
        <Route path="/sitemap" Component={Sitemap} />
        <Route path="/filters" Component={Filters} />
        <Route path="/support" Component={Support} />
        <Route path="/taxes" Component={Taxes} />
        <Route path="/maps" Component={Maps} />
        <Route path="/stays" Component={Stays} />
        <Route path="/experiences" Component={Experiences} />
      </Routes>
    </>
  );
}

export default RouterApp;
