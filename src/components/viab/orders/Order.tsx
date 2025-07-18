// app/orders/page.tsx
"use client";
import React, { useState } from "react";
import "./Order.css";
import {
  FaBoxOpen,
  FaHourglassStart,
  FaTruck,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "returns":
        return (
          <div className="returns-section">
            <h4>Request a Return</h4>
            <div className="mb-3">
              <select className="form-select">
                <option>Select Reason for Return</option>
                <option>Damaged Item</option>
                <option>Wrong Item</option>
                <option>Other</option>
              </select>
            </div>

            <div className="upload-box mb-3">
              <p className="text-center">Upload Photos</p>
              <p className="text-center small">
                Drag and drop or browse to upload photos of the item(s) you wish
                to return.
              </p>
              <div className="text-center">
                <button className="btn btn-outline-dark">Browse Files</button>
              </div>
            </div>

            <div className="text-end">
              <button className="btn btn-danger">Submit Return Request</button>
            </div>

            <hr />
            <h5>Return Status</h5>
            <div className="progress mb-2">
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <p className="small">
              Requested → Approved → Pickup Scheduled → Refunded
            </p>

            <hr />
            <h5>Refund Details</h5>
            <p>Refund Method: Original Payment Method</p>
            <p>Expected Refund Timeline: 7–10 business days</p>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="storeCreditSwitch"
              />
              <label className="form-check-label" htmlFor="storeCreditSwitch">
                Store Credit
              </label>
            </div>
            <p className="small mt-2">
              Refund Policy: Items must be returned within 30 days of purchase
              and in original condition. See full policy.
            </p>

            <hr />
            <h5>Previous Refunds</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>Order #12345</p>
                <p>
                  Refunded: <strong>$150.00</strong>
                </p>
                <p>Refund Date: July 15, 2024</p>
                <button className="btn btn-outline-dark btn-sm">
                  View Receipt
                </button>
              </div>
              <Image
                src="/assets/images/order.png"
                className="imag-margin"
                alt="Receipt"
                width={320}
                height={220}
              />
            </div>
          </div>
        );
      case "open":
        return (
          <>
            <div className="container conts mt-5">
              <title>Order #123456</title>
              <div className="card p-4" style={{ borderRadius: "10px" }}>
                <h2 className="card-title">Order #123456</h2>
                <p className="card-text" style={{ fontStyle: "italic" }}>
                  Placed on July 15, 2024
                </p>

                <h4 className="mt-4">Order Details</h4>
                <div className="table-responsive-wrapper">
  <table className="table table-bordered table-clr w-100">
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Modern Sofa</td>
        <td>2</td>
        <td>$1200</td>
        <td><button className="btn btn-light">Shipped</button></td>
      </tr>
      <tr>
        <td>Coffee Table</td>
        <td>1</td>
        <td>$300</td>
        <td><button className="btn btn-light">Shipped</button></td>
      </tr>
    </tbody>
  </table>
</div>

                {/* <table className="table table-bordered table-clr">
                  <thead>
                    <tr style={{ backgroundColor: "#B7A99A" }}>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Product">Modern Sofa</td>
                      <td data-label="Quantity">2</td>
                      <td data-label="Price">$1200</td>
                      <td data-label="Status">
                        <button className="btn btn-light">Shipped</button>
                      </td>
                    </tr>
                    <tr>
                        <td data-label="Product">Modern Sofa</td>
                      <td data-label="Quantity">2</td>
                      <td data-label="Price">$1200</td>
                      <td data-label="Status">
                        <button className="btn btn-light">Shipped</button>
                      </td>
                    </tr>
                  </tbody>
                </table> */}

                <h4 className="mt-4">Shipping Address</h4>
                <div
                  className="p-3"
                  style={{
                    backgroundColor: "rgba(157, 150, 134, 0.5)",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                ></div>

                <h4 className="mt-4">Payment Information</h4>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Payment Method</td>
                      <td>Credit Card</td>
                    </tr>
                    <tr>
                      <td>Amount Paid</td>
                      <td>$1500</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex justify-content-end mt-4">
                  <button className="btn btn-outline-secondary  responsive-btn me-2">
                    Cancel Order
                  </button>
                  <button className="btn btn-primary responsive-btn">Save Changes</button>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="search-box mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>

            <div className="status-list mb-4">
              <p>
                <FaBoxOpen /> Placed
              </p>
              <p>
                <FaHourglassStart /> Processing
              </p>
              <p>
                <FaTruck /> Shipped
              </p>
              <p>
                <FaMapMarkedAlt /> Out for Delivery
              </p>
              <p>
                <FaCheckCircle /> Delivered
              </p>
            </div>

            <div className="order-card">
              <h6>Order #12345</h6>
              <p>Placed on July 15, 2024. Total: $250</p>
              <button className="btn btn-outline-dark btn-sm">
                Track Order
              </button>
            </div>

            <div className="order-card">
              <h6>Order #67890</h6>
              <p>Placed on June 20, 2024. Total: $180</p>
              <button className="btn btn-outline-dark btn-sm">
                Track Order
              </button>
            </div>

            <div className="order-card">
              <h6>Order #11223</h6>
              <p>Placed on May 5, 2024. Total: $320</p>
              <button className="btn btn-outline-dark btn-sm">
                Track Order
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="main-class">
      <div className="orders-container container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Orders</h2>
          <button className="btn btn-dark">New Order</button>
        </div>

        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Orders
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "open" ? "active" : ""}`}
              onClick={() => setActiveTab("open")}
            >
              Open Orders
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "returns" ? "active" : ""}`}
              onClick={() => setActiveTab("returns")}
            >
              Returns & Refunds
            </button>
          </li>
        </ul>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default OrdersPage;
