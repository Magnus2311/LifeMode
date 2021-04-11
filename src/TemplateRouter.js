import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import ConfirmationEmailTemplate from "./components/pages/templates/emails/ConfirmationEmailTemplate";

const TemplateRouter = () => {
  const location = useLocation();
  return (
    <Switch key={location.key} location={location}>
      <Route
        path="/templates/confirmationEmail/:email/:token"
        exact
        component={ConfirmationEmailTemplate}
      />
    </Switch>
  );
};

export default TemplateRouter;
