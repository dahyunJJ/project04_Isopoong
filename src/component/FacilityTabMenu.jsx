import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "../css/component.css";

function FacilityTabMenu() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tabCategory"
    >
      <Tab eventKey="all" title="전체">
        <p>dd</p>
      </Tab>
      <Tab eventKey="exhibition" title="전시/기념관"></Tab>
      <Tab eventKey="movie" title="영화/연극/공연"></Tab>
      <Tab eventKey="travel" title="관광지"></Tab>
      <Tab eventKey="scenic" title="명승지"></Tab>
    </Tabs>
  );
}

export default FacilityTabMenu;
