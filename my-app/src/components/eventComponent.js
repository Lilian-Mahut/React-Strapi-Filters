import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./eventComponent.scss"

const eventComponent = () => {
    useEffect(() => {})
    return (
        <div>
            <div>Titre</div>
            <div>Organisateur</div>
            <div>Date</div>
            <div>Participants</div>
            <div>Description</div>
        </div>
    )
}

export default eventComponent
