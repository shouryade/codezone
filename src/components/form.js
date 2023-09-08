import React from "react";

const JotForm = () => {
  return (
    <iframe
      id="JotFormIFrame-232505929007051"
      title="Form"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowTransparency="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/232505929007051"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        height: "539px",
        border: "none",
      }}
      className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6"
    ></iframe>
  );
};

export default JotForm;
