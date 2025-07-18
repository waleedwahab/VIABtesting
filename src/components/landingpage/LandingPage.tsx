"use client";
import "./LandingPage.css";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
const LandingPage = () => {
  
   const [selected, setSelected] = useState("customer");
  const [underlineStyle] = useState({});
   const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login'); // Navigates to /auth/login
  };
  const handleSignUpClick = ()=>{
    router.push('/auth/register');
  }
  const featureImages = [
  {
    image: "/assets/images/feature1.png",
    title: "AI Powered Visualization",
  },
  {
    image: "/assets/images/feature2.png",
    title: "Insurance Portal",
  },
  {
    image: "/assets/images/feature3.png",
    title: "BOQ Analysis",
  },
  {
    image: "/assets/images/feature4.png",
    title: "Interior Marketplace",
  },
  {
    image: "/assets/images/feature5.png",
    title: "Order Management",
  },
  {
    image: "/assets/images/feature6.png",
    title: "Vendor Portal",
  },
];

const feature =  [{
        image: "/assets/images/feature7.png",}
]
//  useEffect(() => {
//     const el = tabRefs.current[selected];
//     if (el) {
//       setUnderlineStyle({
//         left: el.offsetLeft,
//         width: el.offsetWidth
//       });
//     }
//   }, [selected]);

const steps = [
  {
    icon:  "/assets/images/step1.png",
    title: "Share Your Ideas",
    description: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
  },
  {
    icon:  "/assets/images/step2.png",
    title: "Experience the Transformation",
    description: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.",
  },
  {
    icon:  "/assets/images/step3.png",
    title: "Collaborate on Design",
    description: 

       "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space."
      
    
  },
];
  return (
    <>
   <nav className="navbar custom-navbar navbar-expand-lg w-100 pt-3 pb-2">
  <div className="container w-100">
    {/* Left - Logo */}
    <a className="navbar-brand custom-logo" href="/viab/home">
      VIAB
    </a>

    {/* Toggler for mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Right - Nav links and buttons */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
      <ul className="navbar-nav d-flex flex-lg-row gap-lg-3 mb-2 mb-lg-0 nav-links align-items-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="d-flex  justify-content-center text-center   gap-2 ms-lg-3   mt-2 mt-lg-0">
        <button className="btn border border-dark login-btn" onClick={handleLoginClick}>Login</button>
        <button className="btn btn-dark signup-btn" onClick={handleSignUpClick}>Sign up</button>
      </div>
    </div>
  </div>
</nav>




 {/* hero section */}
<div className="container  d-flex flex-column text-center mt-5">
  <div className="d-flex justify-content-center gap-5 role-tabs position-relative ">
  <div
    className={`tab-item ${selected === "customer" ? "selected" : ""}`}
    onClick={() => setSelected("customer")}
    // ref={el => tabRefs.customer = el}
  >
    Customer
  </div>
  <div
    className={`tab-item ${selected === "vendor" ? "selected" : ""}`}
    onClick={() => setSelected("vendor")}
    // ref={el => tabRefs.vendor = el}
  >
    Vendor
  </div>
  <div
    className={`tab-item ${selected === "customer2" ? "selected" : ""}`}
    onClick={() => setSelected("customer2")}
    // ref={el => tabRefs.customer2 = el}
  >
    Insurance
  </div>
  <div className="tab-underline" style={underlineStyle}></div>
</div>


      <div className="mt-5">
        <h2 className="fw-bold">Elevate Your Space:</h2>
        <h2 className="fw-bold">Design. Visualize. Insure.</h2>
        <p className="descriptionss mt-3">
          VIAB brings AI-powered interior design, seamless shopping, and
          project-backed insurance into one intuitive platform — all in just a few clicks.
        </p>
      </div>
    </div>

    {/* core features */}

{/* Core Features Section */}
<div className="container my-5 core-section">
  <h4 className="mb-4 fw-semibold text-center text-lg-start">Core Features</h4>

<div className="row w-100">
  {featureImages.map((data, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 feture">
      <div className="feature-box position-relative overflow-hidden   h-80">
        <Image
          src={data.image}
          width={100}
          height={100}
          className="img-fluid w-100 h-80"
          alt={`feature-${index + 1}`}
        />
        <div className="card-image-overlay d-flex justify-content-start align-items-end p-3">
          <h5 className="card-title text-white">{data.title}</h5>
        </div>
      </div>
    </div>
  ))}
</div>



  <div className="row mt-5 mob-center-class">
    {/* Left Image(s) */}
  {/* Left Image(s) */}
<div className="col-12 col-lg-6 mb-4 mb-lg-0 mob-class">
  <Image
    src="/assets/images/feature7.png"
    className="img-fluid image-11 mb-3"
    alt="image"
    width={100}
    height={100}
  />
</div>


    {/* Right Text */}
    <div className="col-12 col-lg-6">
      <h5 className="shapping mb-3 text-center text-lg-start">Shaping Your Ideal Home With Expertise</h5>
      <p className="elevate-text text-center text-lg-start">
        Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations...
      </p>
      <p className="feature-link">Living Room Ambiance Design</p>
      <p className="feature-link">Commercial Office Room Interior Design</p>
      <div className="text-center text-lg-start">
        <button className="btn btn-outline-dark rounded-pill px-5 pt-3 pb-3 mt-4">Learn More</button>
      </div>
    </div>
  </div>
</div>



    {/* steps */}
 <div className="container my-5 steps-section">
  <h4 className="fw-bold text-center mb-5">Bringing Your Vision to Life in Three Easy Steps</h4>

  <div className="row align-items-center">
    {/* Steps List */}
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      {steps.map((step, index) => (
        <div key={index} className="d-flex align-items-start mb-4 step-item">
          <div className="icon-wrapper me-3 mt-2">
            <Image src={step.icon} width={50} height={50} alt="step-icon" className="step-icon" />
          </div>
          <div>
            <h6 className="step-title">{step.title}</h6>
            <p className="mb-0 desc-font-s">{step.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Image */}
    <div className="col-12 col-lg-6 text-center">
      <Image
        src="/assets/images/step4.png"
        width={600}
        height={600}
        alt="Design Space"
        className="img-fluid circle-image"
      />
    </div>
  </div>
</div>




{/* /review */}


  <div className="container my-5 customer-cont">
  <h1 className="text-center mb-4">What Our Customers Say About Us</h1>

  <div className="row align-items-center">
    <div className="col-12 col-lg-6 text-center">
      <Image src="/assets/images/review1.png" width={470} height={470} alt="Review" className="img-fluid" />
    </div>

    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
      <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
        <Image src="/assets/images/review-prof.png" width={75} height={75} alt="Ryan Gomez" className="me-3" />
        <div>
          <h5 className="mb-0">Ryan Gomez</h5>
          <p className="text-muted">New York, USA</p>
        </div>
      </div>
      <p className="text-justify rev-desc">
        Working with your design team was an absolute pleasure...
      </p>
      <div className="text-center text-lg-start mt-4">
        <button className="btn btncolor-bg mx-2">
          <Image src="/assets/icons/png/left-arrow.png" width={30} height={30} alt="Left" />
        </button>
        <button className="btn btncolor-bg mx-2">
          <Image src="/assets/icons/png/right-arrow.png" width={30} height={30} alt="Right" />
        </button>
      </div>
    </div>
  </div>

  {/* Newsletter */}
  <div className="text-center mt-5">
    <p className="new-subsc">Subscribe to Our Newsletter for Design Insights</p>
    <p className="subs-des">
      Be the first to discover trends, inspirations, and special offers...
    </p>

    <div className="input-group custom-email-group w-100 w-md-75 w-lg-50 mt-4">
      <span className="input-group-text email-icon">
        <Image src="/assets/icons/png/emailicon.png" width={25} height={25} alt="Email Icon" />
      </span>
      <input
        type="email"
        className="form-control input-email"
        placeholder="Enter your email address"
      />
      <button className="btn subscribe-btn">Subscribe</button>
    </div>
  </div>
</div>

    


    {/* footer */}

    {/* <div className="container p-0">
    
      <div className="bg-dark text-light p-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="text-start">
          <h1>VIAB</h1>
          <p className="inter-footer mt-2">Interior your premier destination for luxury and modern interior design</p>
          <div className="d-flex gap-4 mt-5">
            <Image src ="/assets/icons/png/f-facebook.png" width={16} height={16}  alt={"Facebook"}/>
            <Image src ="/assets/icons/png/f-twitter.png" width={16} height={16} alt={"Twitter"}/>
            <Image src ="/assets/icons/png/f-instagram.png" width={16} height={16} alt={"Instagram"}/>
            <Image src ="/assets/icons/png/f-linkendin.png" width={16} height={16} alt={"LinkedIn"}/>
          </div>
        </div>
        <div className="text-start">
          <h4>Our Services</h4>
          <p>AI driven design visualization</p>
          <p>Furniture marketplace</p>
          <p>Insurance services</p>
          <p>Role based dashboards</p>
        </div>
        <div className="text-start">
          <h4>Join Our Community</h4>
          <p>FAQs</p>
          <p>Terms and conditions</p>
          <p>Privacy Statement</p>
        </div>
        <div className="text-start">
          <h4>About Us</h4>
          <p>info@interior.com</p>
          <p>xyz town, near , city , country</p>
        </div>
      </div>
    </div> */}
 <div className="container p-0">
  <div className="bg-dark text-light p-4">
    <div className="row justify-content-center text-center text-md-start">
      {/* Logo + Description */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <h1>VIAB</h1>
        <p className="inter-footer mx-auto mx-md-0 mt-2">
          Interior your premier destination for luxury and modern interior design
        </p>
        <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-4">
          <Image src="/assets/icons/png/f-facebook.png" width={16} height={16} alt="Facebook" />
          <Image src="/assets/icons/png/f-twitter.png" width={16} height={16} alt="Twitter" />
          <Image src="/assets/icons/png/f-instagram.png" width={16} height={16} alt="Instagram" />
          <Image src="/assets/icons/png/f-linkendin.png" width={16} height={16} alt="LinkedIn" />
        </div>
      </div>

      {/* Services */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <h4>Our Services</h4>
        <p>AI driven design visualization</p>
        <p>Furniture marketplace</p>
        <p>Insurance services</p>
        <p>Role based dashboards</p>
      </div>

      {/* Community */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <h4>Join Our Community</h4>
        <p>FAQs</p>
        <p>Terms and conditions</p>
        <p>Privacy Statement</p>
      </div>

      {/* Contact */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <h4>About Us</h4>
        <p>info@interior.com</p>
        <p>xyz town, near, city, country</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default LandingPage;
