
"use client";
import Image from "next/image";
import "./Mycart.css";
const Mycart = () => {
  
  return (
    <div className="main-cart">
    <div className="cart-wrapper container">
      <h3 className="cart-title">My Cart (2 items)</h3>
<div className="cart-cls">
      <div className="cart-item">
        <div className="item-details">
          <Image src={"/assets/images/rug.png"} alt="Modern Wool Rug" width={70} height={70} className="item-img" />
          <div className="item-info">
            <strong>Modern Wool</strong>
            <p className="text-muted">Rug</p>
            <p className="text-muted">Color: Beige</p>
            <p className="text-muted">Size: 100×200cm</p>
          </div>
        </div>
        <div className="item-price ">$250</div>
        <div className="quantity-control mt-3 pt-2 ">
          <label>Quantity</label>
          <select className="form-select">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
         
        </div>
      </div>
       <div className="btn-group mt-2 d-flex gap-3 btns-g-class">
            <button className="btn   remove-w pt-2 pb-2">Remove</button>
            <button className="btn  remove-w pt-2 pb-2">Move to Wishlist</button>
          </div>
      </div>
     <div className="cart-cls">
      <div className="cart-item">
        <div className="item-details">
         <Image src="/assets/images/bed.png" alt="Classic Cotton Bedding Set" width={70} height={70} className="item-img" />
          <div className="item-info">
            <strong>Modern Wool</strong>
            <p className="text-muted">Rug</p>
            <p className="text-muted">Color: Beige</p>
            <p className="text-muted">Size: 100×200cm</p>
          </div>
        </div>
        <div className="item-price ">$250</div>
        <div className="quantity-control mt-3 pt-2 ">
          <label>Quantity</label>
          <select className="form-select">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
         
        </div>
      </div>
       <div className="btn-group mt-2 d-flex gap-3 btns-g-class">
            <button className="btn   remove-w pt-2 pb-2 w-25">Remove</button>
            <button className="btn  remove-w pt-2 pb-2 w-25">Move to Wishlist</button>
      </div>
      </div>
      <div className="order-summary">
        <h5>Order Summary</h5>
        <div className="summary-row"><span>Subtotal</span><span>$430</span></div>
        <div className="summary-row"><span>Shipping</span><span>Free</span></div>
        <div className="summary-row"><span>Estimated Tax</span><span>$21.50</span></div>
        <div className="summary-row total"><span>Total</span><span>$451.50</span></div>
        <button className="btn btn-dark mt-3 ">Checkout</button>
      </div>
    </div>
    </div>
  );
};

export default Mycart;
