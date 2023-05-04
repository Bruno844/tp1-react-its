import React from 'react'

const Carrousel = () => {
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.pexels.com/photos/16117986/pexels-photo-16117986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/16090503/pexels-photo-16090503.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-auto" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/16067013/pexels-photo-16067013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100 " alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrousel