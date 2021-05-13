import React from 'react';
import './Landing.css';
import imgAH from '../../assets/images/foto-heredia.jpeg';


const Landing = () =>{
    return (
        <div className="Landing" >
            <div className= "Landing-left" >

                <div className="Landing-image-wrapper" >
                    <img src={imgAH} alt="" />
                </div>
                <h2>Armando Heredia</h2>
                
            </div>
            <div className="Landing-right">
            <p>Mi nombre es Armando Heredia y soy de Aguascalientes</p>
            <br></br><br></br>
            <p>Y actualmente soy estudiante de la universidad tecnologica de Aguascalientes</p>
            </div>
        </div>
       
    );
};

export default Landing;