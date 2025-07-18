"use client";
import axios from "axios";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$1",
      priceId: "price_1RlYiVPS2f6BSmidOGM05rDu",
      features: [
        "Basic features access",
        "5 projects per month",
        "Community support",
        "Weekly updates",
      ],
    },
    {
      name: "Premium Plan",
      price: "$2",
      priceId: "price_1RlYjqPS2f6BSmidmKmOgTc1",
      features: [
        "All Basic features",
        "Unlimited projects",
        "Priority support",
        "Daily updates",
        "Advanced analytics",
      ],
    },
  ];


  const handleSubscribe = async (priceId: string) => {
    try {
      const response = await axios.post(
        "https://viabtesting.onrender.com/api/v1/users/create-checkout-session",
        { priceId },
        { withCredentials: true }
      );

      const { url } = response.data;
      if (url) {
        window.location.href = url; // Redirect to Stripe Checkout
      }
    } catch (error: any) {
      console.error("Subscription error:", error);
      alert("Failed to initiate subscription.");
    }
  };
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Choose Your Plan</h2>
      <p className="text-center text-muted">Simple pricing for everyone</p>
      <div className="row justify-content-center mt-4">
        {plans.map((plan, index) => (
          <div className="col-md-5 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.name}</h5>
                <h3 className="my-3">
                  {plan.price} <small className="text-muted">/month</small>
                </h3>
                <ul className="list-unstyled text-start ps-3 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary w-100"onClick={() => handleSubscribe(plan.priceId)}
>Subscribe Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
