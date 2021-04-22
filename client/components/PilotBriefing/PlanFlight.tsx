import React from "react";

const PlanFlight = () => {
  const iframeStyles = {
    display: "block",
    border: "5px solid grey",
    borderRadius: "15px",
  };

  return (
    <div className="fpltoif" style={{ display: "grid", placeItems: "center" }}>
      <iframe
        src="https://fpltoif.com/simbrief"
        height="600px"
        width="1200px"
        style={iframeStyles}
      />
    </div>
  );
};

export default PlanFlight;
