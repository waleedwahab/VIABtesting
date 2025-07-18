// app/generated/page.tsx
"use client";
import Image from "next/image";
import "./Generateddrawings.css";
const Generateddrawings = () => {
  return (
    <div className="generated-wrapper">
      <div className="container text-center">
        <h2 className="generated-heading">Your Generated Architectural Drawings</h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-3 col-10 mb-3">
            <Image src= "/assets/images/drawing1.png" width={100} height={100} alt="Drawing 1" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-3 col-10 mb-3">
            <Image src="/assets/images/drawing2.png"  width={100} height={100} alt="Drawing 2" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-3 col-10 mb-3">
            <Image src="/assets/images/drawing3.png"  width={100} height={100} alt="Drawing 3" className="img-fluid rounded shadow" />
          </div>
        </div>

        <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
          <button className="custom-btnss">Download All Drawings</button>
          <button className="custom-btnss">Print Drawings</button>
          <button className="custom-btnss">Share Drawings</button>
        </div>

        <div className="quantity-section text-center d-flex gap-5 justify-content-center align-items-center">
          <h5 className="quantity-heading mt-3">Need to see the Quantities?</h5>
          <button className="custom-btnss">Generate Bill Of Quantities(BOQs)</button>
        </div>
      </div>
    </div>
  );
};

export default Generateddrawings;