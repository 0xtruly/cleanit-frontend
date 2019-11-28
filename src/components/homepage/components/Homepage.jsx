import React from "react";
import PageContent from "./PageContent";
import PageHelmet from "./PageHelmet";

export default function Homepage() {
  return (
    <React.Fragment>
      <PageHelmet />
      <PageContent />
    </React.Fragment>
  );
}
