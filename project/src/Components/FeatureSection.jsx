import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fea1, Hero2, Hero3,fea2,fea3 } from '../asserts';

const FeatureSection = () => {
  return (
    <section className="d-flex align-items-center bg-light  " style={{ minHeight: '100vh' }}>
      <div className="container mx-auto py-16 px-6 lg:px-16">
        <div className="space-y-11">
          <div className="text-center md:px-48">
            <h1 className="font-weight-bold text-dark" style={{ fontSize: '2.25rem', lineHeight: '1.75' }}>
              Explore Our Curated Footwear Collection
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="position-relative overflow-hidden ">
                <img
                  src={fea2}
                  alt="Back in Stock"
                  className="img-fluid  "
                  style={{ transition: 'transform 0.5s ease-in-out', minHeight: '100vh' }}
                />
                <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', transition: 'all 0.5s ease-in-out' }}>
                  Back in Stock
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={fea1}
                      alt="On Sale"
                      className="img-fluid"
                      style={{ transition: 'transform 0.5s ease-in-out', height: '18rem' }}
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', transition: 'all 0.5s ease-in-out' }}>
                      On Sale
                    </span>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={fea3}
                      alt="Trending Now"
                      className="img-fluid"
                      style={{ transition: 'transform 0.5s ease-in-out', height: '18rem' }}
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', transition: 'all 0.5s ease-in-out' }}>
                      Trending Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
