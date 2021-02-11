import React from "react";
import Barcode from "react-barcode";

const BarcodeImage = ({ barcode }) => {
  return (
    <div>
      {barcode.length ? (
        <>
          <Barcode value={barcode} displayValue={false} margin={25} />
          <span className="barcode-text">{barcode.replaceAll("0", "Ø")}</span>
        </>
      ) : (
        <p>Enter a code above</p>
      )}
    </div>
  );
};

export default BarcodeImage;
