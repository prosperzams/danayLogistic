import React from 'react'
import "./css/Carroussel.css"

export default function Carroussel() {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                <img src="images/LOGO1.png" className="d-block w-100"/>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                <img src="images/BANIERE-1.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="images/images (2).jpeg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="images/images (3).jpeg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="images/img (4).jpg" className="d-block w-100"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
