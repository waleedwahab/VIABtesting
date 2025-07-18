import Image from 'next/image'
import './viewproduct.css'  // import your external CSS

export default function Viewproduct() {
  const Furniture = [
    "/assets/images/sofa2.png",
    "/assets/images/sofa3.png",
    "/assets/images/sofa4.png",
    "/assets/images/sofa1.png",
  ];

  return (
    <div className="viewproduct-bg text-dark custom-font min-vh-100">
      <div className="container py-4">
        <nav className="small text-secondary mb-4 px-3">
          <span>Furniture Product Page /</span> <span className="fw-bold text-dark">Sofa</span>
        </nav>

        <div className="row gx-4">
          {/* Main Image + Thumbnails */}
          <div className="col-lg-12">
  <div className="border p-2 bg-light">
    <div className="bg-white rounded shadow-sm overflow-hidden position-relative w-100" style={{ height: "500px" }}>
      <Image
        src="/assets/images/sofa1.png"
        alt="Sofa"
        fill
        style={{ objectFit: 'cover' }}
        className="img-fluid rounded"
      />
    </div>
    <div className="d-flex gap-3 mt-3 flex-wrap  justify-content-center ">
      {Furniture.map((src, i) => (
        <div key={i} className='w-20 position-relative sofa-images '  style={{ height: '220px' }}>
        <Image
         
          src={src}
          alt={`Sofa ${i}`}
         fill
           style={{ objectFit: 'cover' }}
          className="img-thumbnail object-cover"
        />
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Product Info */}
          <div className="col-lg-12 mt-4">
            <div className="product-info">
              <h1 className="h4 mb-2">$1,499</h1>
               <h3 className="text-muted">Luxe Lounge Sofa</h3>
              <div className="d-flex  mb-3 ">
                <div className='w-25'>
                <div className="text-warning">4.5 ★★★★★</div>
                <div className="text-muted ms-2">(123 reviews)</div>
                </div>
               <div className='d-flex flex-column w-100'>
                <div className='d-flex align-items-center'>
                 <span className="text-muted ms-2">5</span>
                <div className="progress w-25 ms-2" style={{ height: '10px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
                </div>
                <span className="text-muted ms-2">50%</span>
               </div>
                <div className='d-flex align-items-center'>
                 <span className="text-muted ms-2">5</span>
                <div className="progress w-25 ms-2" style={{ height: '10px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
                </div>
                <span className="text-muted ms-2">50%</span>
               </div>
               <div className='d-flex align-items-center'>
                 <span className="text-muted ms-2">5</span>
                <div className="progress w-25 ms-2" style={{ height: '10px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
                </div>
                <span className="text-muted ms-2">50%</span>
               </div>
               <div className='d-flex align-items-center'>
                 <span className="text-muted ms-2">5</span>
                <div className="progress w-25 ms-2" style={{ height: '10px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
                </div>
                <span className="text-muted ms-2">50%</span>
               </div>
              </div>
              
              </div>
              <div className='w-100 d-flex justify-content-start gap-4'>
                <button className="btn btn-primary w-sm-100   mt-4 py-2" style={{background:"rgba(106, 100, 84, 1)", border:"none"}}>Add to Cart</button>
                <button className="btn btn-primary w-sm-100  mt-4 py-2" style ={{background:"rgba(245, 240, 232, 1)",color:"rgba(106, 100, 84, 1)", border:"1px solid rgba(106, 100, 84, 1)"}}>Add to whishlist</button>
                </div>
              <p className="text-muted small mb-4 mt-4">
                The Luxe Lounge Sofa is the epitome of comfort and style, this sofa promises durability and lasting beauty for any living room. Crafted with premium materials, this sofa features plush cushioning and sleek design.
              </p>
             <div>
              <h4>Specifications</h4>
              <div className='d-flex gap-5'>
              <div className='bordering-mat'>
                <p>Size</p>
                <p>85 W x 35 D x 30 H</p>
              </div>
                <div className='bordering-mat'>
                  <p>Weight</p>
                <p>150 lbs</p>
                </div>
                <div className='bordering-mat'>
                  <p>Material</p>
                <p>Velvet, Wood</p>
                </div>
              </div>
             </div>
              {/* Options */}
              <div className="border rounded p-3 mb-4 mt-3">
                <h5 className="fw-bold">Depth 4, Frame 10</h5>
                <div className="d-flex flex-column align-items-start mt-2">
                  <h5 className="me-3">Available Colors</h5>
                
                  <div className="d-flex gap-2">
                    <button className="btn btn-light rounded-circle" style={{ width: '30px', height: '30px', backgroundColor: '#D3D3D3' }}></button>
                    <button className="btn btn-light rounded-circle" style={{ width: '30px', height: '30px', backgroundColor: '#8B4513' }}></button>
                  </div>
                </div>
              </div>
              <div className="border rounded p-3 mb-4">
                <h5 className="fw-bold">Fabric/Finish Options</h5>
                <div className="d-flex flex-column align-items-start mt-2">
                
                  <div className="d-flex gap-2">
                    <button className="btn btn-light  buttons-clrs" style={{ backgroundColor: '#D3D3D3' }}>Velvet</button>
                    <button className="btn btn-light  buttons-clrs " style={{ backgroundColor: '#D3D3D3' }}>Leather</button>
                    <button className="btn btn-light   buttons-clrs" style={{ backgroundColor: '#D3D3D3' }}>Linen</button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="border rounded p-3 mb-4">
                <h5 className="fw-bold">Product Details</h5>
                  <select className="form-select mb-2">
                  <option>Specificaions</option>
                  <option>Gray</option>
                  <option>Brown</option>
                  <option>Black</option>
                </select>
                <select className="form-select mb-2">
                  <option>Available Colors</option>
                  <option>Gray</option>
                  <option>Brown</option>
                  <option>Black</option>
                </select>
                <select className="form-select mb-2">
                  <option>Fabric/Finish Options</option>
                  <option>Velvet</option>
                  <option>Leather</option>
                  <option>Linen</option>
                </select>
                  <select className="form-select mb-2">
                  <option>Delivery and return information</option>
                  <option>Gray</option>
                  <option>Brown</option>
                  <option>Black</option>
                </select>
                <p className="text-muted small">
                  Delivery & Return Info: Orders under $2,000 offer a 30-day return policy for unused items in their original packaging. Please see our full policy for more details.
                </p>
              </div>

              {/* Customer Reviews */}
              <div className="border rounded p-3">
                <h5 className="fw-bold">Customer Reviews</h5>
                <div className="d-flex align-items-start mb-3">
                  <Image src="/assets/images/rev1.png" alt="User" width={40} height={40} className="rounded-circle me-3" />
                  <div>
                    <p className="mb-0"><strong>Sophia Carter</strong></p>
                    <p className="text-muted small mb-0">★★★★★ (5/5)</p>
                    <p className="text-muted small">Absolutely love this sofa! Incredible comfort and looks fantastic in my living room. The fabric is soft and durable. Highly recommend!</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <Image src="/assets/images/rev2.png" alt="User" width={40} height={40} className="rounded-circle me-3" />
                  <div>
                    <p className="mb-0"><strong>Ethan Bennett</strong></p>
                    <p className="text-muted small mb-0">★★★★☆ (4/5)</p>
                    <p className="text-muted small">The sofa is great overall, but the color was slightly different than expected. It’s a beautiful piece of furniture and very comfortable.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <Image src="/assets/images/rev3.png" alt="User" width={40} height={40} className="rounded-circle me-3" />
                  <div>
                    <p className="mb-0"><strong>Olivia Hayes</strong></p>
                    <p className="text-muted small mb-0">★★★★★ (5/5)</p>
                    <p className="text-muted small">This sofa exceeded my expectations! It’s not only stylish but also incredibly comfortable. The delivery was smooth, and the sofa arrived in perfect condition. I’m thrilled with my purchase!</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
            
            </div>

            {/* Related Products */}
            <div className="mt-5">
              <h5 className="fw-bold">Related Products</h5>
              <div className="row g-4">
                <div className="col-4">
                  <div className="card h-100">
                    <Image src="/assets/images/relp3.png" alt="Coffee Table" width={200} height={150} className="card-img-top" />
                    <div className="card-body">
                      <h6 className="card-title">Luxe Coffee Table</h6>
                      <p className="card-text text-muted">$599</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card h-100">
                    <Image src="/assets/images/rel p1.png" alt="Armchair" width={200} height={150} className="card-img-top" />
                    <div className="card-body">
                      <h6 className="card-title">Luxe Armchair</h6>
                      <p className="card-text text-muted">$999</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card h-100">
                    <Image src="/assets/images/relatedp2.png" alt="Floor Lamp" width={200} height={150} className="card-img-top" />
                    <div className="card-body">
                      <h6 className="card-title">Luxe Floor Lamp</h6>
                      <p className="card-text text-muted">$199</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
        </div>
      </div>
    </div>
  );
}
