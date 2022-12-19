import React from "react";
import {Datos, CheckBox, BotonInicio, Span} from "../components";
import "./Home.css";


const HomePage = ()=> {
    return(
    
        <div class="container rounded shadow ">
            <div class="filas row">
                <div class="mono col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start">

                </div>
                <div class="contenedor col p-5 rounded-end">
                    
                <h2 class="título">Iniciar sesión</h2>
                    <br></br>
                    <form>
                        <div>
                            <Datos/>
                        </div>

                        <div>
                            <CheckBox/>
                        </div>
                        <br></br>
                        <div>
                            <BotonInicio/>
                        </div>

                        <div>
                            <Span/>
                        </div>
                    </form>

                </div>

            </div>

        </div>

    )

}

export default HomePage;