import React from "react";

const Form = ({ barcode, setBarcode }) => (
  <form className="form">
    <input
      value={barcode}
      onChange={(e) => {
        setBarcode(e.target.value);
      }}
      autoFocus={true}
      maxLength={16}
    />
  </form>
);

export default Form;
