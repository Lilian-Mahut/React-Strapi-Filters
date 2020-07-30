import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./searchComponent.scss"

const searchComponent = () => {
    useEffect(() => {})
    return (
        <div>
            <p>Type d'événements</p>
            <select name="typeOfEvent" id="type-event-select">
                <option value="">--Choisir un type d'event</option>
                <option value="sport">Sport</option>
                <option value="boire">Boire</option>
                <option value="manger">Manger</option>
                <option value="voyage">Voyage</option>
            </select>
            <p>Choix événéments</p>
            <div>
                <input type="checkbox" id="sport" name="sport" />
                <label for="sport">Sport</label>
            </div>
            <div>
                <input type="checkbox" id="boire" name="boire" />
                <label for="boire">Boire</label>
            </div>
            <div>
                <input type="checkbox" id="manger" name="manger" />
                <label for="manger">Manger</label>
            </div>
            <div>
                <input type="checkbox" id="voyage" name="voyage" />
                <label for="voyage">Voyage</label>
            </div>

            <p>Places disponibles</p>
            <select name="places" id="places">
            <option value="all">Toutes</option>
            <option value="twoMore">2 et +</option>
            <option value="one">1</option>
            <option value="empty">Vide</option>
            </select>
        </div>
    )
}
                
export default searchComponent
