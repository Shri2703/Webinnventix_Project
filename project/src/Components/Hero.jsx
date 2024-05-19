import React from 'react';
import Navbar from '../Components/Navbar';
import './Hero.css'; // Ensure this file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h1 className="title text-white pt-5">Enjoy Your Creative Freedom With Copyva</h1>
            <p className="description text-white p-2">Unlock your creativity without the fear of copyright infringement. Buy licences for music and content, or monetise your original creations by selling their licences with us.</p>
            <div className="input-group d-flex justify-content-center align-items-center mt-3 p-2">
              <input type="text" className="form-control search-bar" placeholder="Search by code..." />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent border-0"><FontAwesomeIcon icon={faSearch} /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="input-group-text bg-transparent border-0">
                  <FontAwesomeIcon icon={faUser} className="mr-2" style={{ fontSize: '1.5rem' }} />
                </span>
                <div>
                  <h5 className="card-text mx-3 mb-0" style={{ fontSize: '1rem' }}>Creator-Music/Content</h5>
                  <p className="card-text mx-3 mb-0" style={{ fontSize: '0.875rem' }}>Sell the Licence of your Music/Content</p>
                </div>
                <span className="input-group-text bg-transparent border-0">
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1.5rem' }} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="input-group-text bg-transparent border-0">
                  <FontAwesomeIcon icon={faUser} className="mr-2" style={{ fontSize: '1.5rem' }} />
                </span>
                <div>
                  <h5 className="card-text mx-3 mb-0" style={{ fontSize: '1rem' }}>User-Music/Content</h5>
                  <p className="card-text mx-3 mb-0" style={{ fontSize: '0.875rem' }}>Buy the music/Content of your choice</p>
                </div>
                <span className="input-group-text bg-transparent border-0">
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1.5rem' }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




