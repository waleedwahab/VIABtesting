// app/checkout/page.tsx
"use client";
import React from "react";
import "./Checkout.css";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="checkout-main">
    <div className="container checkout-container py-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Checkout</h2>

          <div className="section">
            <h5>1. Shipping Address</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="address" defaultChecked />
              <label className="form-check-label">Home<br />123 Home Street, Anytown, CA 91234</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="address" />
              <label   className="form-check-label">Work<br />456 Oak Avenue, Anytown, CA 91234</label>
            </div>
            <button className="btn btn-secondary btn-sm mt-2 edit-add-btn pt-2 pb-2 ps-3 pe-3">Edit Address</button>
          </div>

          <div className="section">
            <h5>2. Payment</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" defaultChecked />
              <label className="form-check-label">Credit/Debit Card<br />Visa, Mastercard, Amex</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" />
              <label className="form-check-label">Pay Later<br />Pay in 4 interest-free payments</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" />
              <label className="form-check-label">Wallet<br />Pay with your wallet balance</label>
            </div>
            <input type="text" className="form-control mt-3" placeholder="Enter card number" />
            <div className="row mt-2">
              <div className="col">
                <input type="text" className="form-control" placeholder="Expiry MM/YY" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="CVV" />
              </div>
            </div>
            <input type="text" className="form-control mt-2" placeholder="Enter name on card" />
            <div className="form mt-4">
              <input className="form-check-input me-3" type="checkbox"  />
              <label className="form-check-label border-none-card">Save this card for future purchases</label>
            </div>
          </div>

          <div className="section">
            <h5>3. Delivery</h5>
            <p>Estimated delivery: Dec 15 - Dec 20</p>
          </div>

          <div className="section">
            <h5>4. Promo Code</h5>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="Enter promo code" />
              <button className="btn btn-light">Apply</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="order-summary">
            <h5>Order Summary</h5>
            <div className="order-item d-flex align-items-center">
              <Image src="/assets/images/modernsofa.png" alt="Sofa" width={60} height={60} />
              <span className="ms-2">Modern Sofa<br />Qty: 1</span>
            </div>
            <div className="order-item d-flex align-items-center">
              <Image src="/assets/images/chair.png" alt="Chair" width={60} height={60} />
              <span className="ms-2">Accent Chair<br />Qty: 2</span>
            </div>
            <div className="order-item d-flex align-items-center">
              <Image src="/assets/images/table.png" alt="Table" width={60} height={60} />
              <span className="ms-2">Coffee Table<br />Qty: 1</span>
            </div>

            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>$1,500</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Taxes</span>
                <span>$150</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span>-$50</span>
              </div>
              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Total</span>
                <span>$1,600</span>
              </div>
            </div>
            <button className="btn btn-light w-100 mt-3">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckoutPage;

/* checkout.css */
