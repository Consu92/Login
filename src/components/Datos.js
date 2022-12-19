import React from "react";
import "./Datos.css";



const Datos = () => {
    return(
        <div class="datos">
            <div class="correo">
                <label for="email " class="correo1 form-label" >Correo electrónico</label>
                <input type="email" class="form-control" name="email"placeholder="correo@gmail.com"/>
            </div>
        
            <div class="contraseña">
                <label for="password" class="contra1 form-label">Contraseña</label>
                <input type="password" class="form-control" name="password" placeholder="*******"/>
            </div>
        </div>
    )
}

export default Datos;