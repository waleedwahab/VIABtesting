// app/boq/page.tsx
"use client";

import Image from "next/image";
import "./Boq.css";


const BoQPage = () => {
  return (
    <div className="boq-main-clr">
    <div className="boq-wrapper container">
      <p className="breadcrumb-text">Projects / Project Details / BoQ</p>
      <h2 className="boq-title">Bill of Quantities (BoQ)</h2>
      <p className="boq-subtext">
        A generated BoQ for your project, with material suggestions and editable tables.
      </p>

      <div className="w-100 text-center d-flex justify-content-center">
        <table className="table table-striped table-bordered table-hover boq-table w-75">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="tbody-b0q">
            {[
              ["Concrete", 100],
              ["Reinforcement Steel", 20],
              ["Formwork", 500],
              ["Brickwork", 1000],
              ["Plastering", 1000],
              ["Flooring", 500],
              ["Painting", 100],
              ["Electrical Works", 1],
              ["Plumbing Works", 1],
              ["Finishes", 1],
            ].map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h5 className="material-heading mt-5">Material Suggestions</h5>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Image src="/assets/images/boq1.png" alt="High-Strength Concrete" className="card-img-top" width = {100} height={100} />
            <div className="card-body">
              <h6 className="card-title">High-Strength Concrete</h6>
              <p className="card-text">Suitable for load-bearing structures</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Image src="/assets/images/boq1.png" alt="Reinforcement Steel Bars" className="card-img-top" width = {100} height={100} />
            <div className="card-body">
              <h6 className="card-title">Reinforcement Steel Bars</h6>
              <p className="card-text">High tensile strength steel</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Image src="/assets/images/boq1.png" alt="Durable Formwork Panels" className="card-img-top" width = {100} height={100} />
            <div className="card-body">
              <h6 className="card-title">Durable Formwork Panels</h6>
              <p className="card-text">Reusable and easy to assemble</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary me-2 pt-3 pb-3 download-boq">Download BoQ</button>
        <button className="btn btn-outline-primary cus-boq-btn pt-3 pb-3">Customise BoQ</button>
      </div>
    </div>
    </div>
  );
};

export default BoQPage;
