import React from 'react'


const InicioPresentacion = () => {
  return (
    <div>
      <img src="./images/inicio/inicio_1_simple.png" className="d-block w-100" alt="..."/>
    </div>
  )
}

const CarouselHijos = () => {
    return (
        <div heigh="40" id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./images/inicio/inicio_2_multiA.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./images/inicio/inicio_2_multiB.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./images/inicio/inicio_2_multiC.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/inicio/inicio_2_multiD.png" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )    
}

const CarouselPresentaciones = () => {
  return (
    <div>
      <img src="./images/inicio/inicio_3_multiD.png" className="d-block w-100" alt="..."/>
      <img src="./images/inicio/inicio_3_multiA.png" className="d-block w-100" alt="..."/>
      <img src="./images/inicio/inicio_3_multiB.png" className="d-block w-100" alt="..."/>
      <img src="./images/inicio/inicio_3_multiC.png" className="d-block w-100" alt="..."/>    
    </div>

  )    
}

const Two= () => {
  return (
    <div>
      <InicioPresentacion/>
      <CarouselHijos/>
      <CarouselPresentaciones/>
    </div>
  )
}

export default Two;