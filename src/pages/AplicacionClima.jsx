import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import '../styles/StyleClima.css';
import { useState } from 'react';

export const AplicacionClima = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '2995651195d0cb960c11c25dcb4e1d5c'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Ocurrió el siguiente problema: ', error)
        }
    }

    return (
        <>
            <NavBar />
            <div className="app-container">
                <form onSubmit={handleSubmit} className="app-form">
                    <input
                        type="text"
                        value={ciudad}
                        onChange={handleCambioCiudad}
                        className="app-input"
                    />
                    <button className="app-button" type="submit">Buscar</button>
                </form>
                {
                    dataClima && (
                        <div className="app-respuesta">
                            <h2 className="app-h2">{dataClima.name}</h2>
                            <p className="app-p">Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
                            <p className="app-p">Condición meteorológica: {dataClima.weather[0].description}</p>
                            <img className="app-img" src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
                        </div>
                    )
                }
            </div>
          <Footer /> 
        </>
    )
};
