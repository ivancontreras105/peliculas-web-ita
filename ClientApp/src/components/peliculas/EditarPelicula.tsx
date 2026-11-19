import { useEffect, useState } from "react";
import { Pelicula } from "../home/ListadoPeliculas";

const EditarPelicula = () => {
    const [titulo, setTitulo] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [urlPortada, setUrlPortada] = useState("");
    const [genero, setGenero] = useState("");
    const [clasificacion, setClasificacion] = useState("");
    const [direccion, setDireccion] = useState("");
    const [duracion, setDuracion] = useState(0);

    const hidId = document.getElementById("hidId") as HTMLInputElement;
    const obtenerRegistro = async () => {
        const resp = await fetch(`http://localhost:5000/peliculas/${hidId.value}`);
        if(resp.ok){
            const data : Pelicula = await resp.json();
            setTitulo(data.Titulo);
            setUrlPortada(data.UrlPortada);
            setSinopsis(data.Sinopsis);
            setGenero(data.Genero);
            setClasificacion(data.Clasificacion);
            setDuracion(data.Duracion);
            setDireccion(data.Direccion);
        }
    }

    useEffect(()=>{
        if(hidId.value){
            obtenerRegistro();
        }
    }, []);

    const guardar = async () => {
        const pelicula : Pelicula = {
            Id: "000000000000000000000000",
            Sinopsis: sinopsis,
            UrlPortada: urlPortada,
            Titulo: titulo,
            Genero: genero,
            Clasificacion: clasificacion,
            Duracion: duracion,
            Direccion: direccion
        };

        if(hidId.value){
            const resp = await fetch(`http://localhost:5000/peliculas/${hidId.value}`, {
                method: "PATCH",
                body: JSON.stringify(pelicula),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(resp.ok){
                alert("Registro actualizado");
                location.href = "/home";
            }
        }
        else{
            const resp = await fetch(`http://localhost:5000/peliculas`, {
                method: "POST",
                body: JSON.stringify(pelicula),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(resp.ok){
                alert("Registro creado");
                location.href = "/home";
            }
        }
        
    }
    return (
        <>
        {hidId.value && <h1>Editar registro</h1>}
        {!hidId.value && <h1>Nuevo registro</h1>}
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="">Título</label>
                        <input type="text" className="form-control" 
                            value={titulo} 
                            onChange={(e)=> setTitulo(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="">Director</label>
                        <input type="text" className="form-control" 
                            value={direccion} 
                            onChange={(e)=> setDireccion(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="mb-3">
                        <label htmlFor="">Clasificación</label>
                        <input type="text" className="form-control" 
                            value={clasificacion} 
                            onChange={(e)=> setClasificacion(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="mb-3">
                        <label htmlFor="">Género</label>
                        <input type="text" className="form-control" 
                            value={genero} 
                            onChange={(e)=> setGenero(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="mb-3">
                        <label htmlFor="">Duración (minutos)</label>
                        <input type="number" className="form-control" 
                            value={duracion} 
                            onChange={(e)=> setDuracion(parseInt(e.target.value))}/>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="">Sinopsis</label>
                        <input type="text" className="form-control" 
                            value={sinopsis} 
                            onChange={(e)=> setSinopsis(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="">Url Portada</label>
                        <input type="text" className="form-control" 
                            value={urlPortada} 
                            onChange={(e)=> setUrlPortada(e.target.value)}/>
                    </div>
                </div>
                <div className="col-sm-12">
                    <button className="btn btn-primary" onClick={guardar}>
                        {hidId.value && <span>Actualizar</span>}
                        {!hidId.value && <span>Guardar</span>}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditarPelicula;