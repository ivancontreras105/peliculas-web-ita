import { useEffect, useState } from "react";

export type Pelicula = {
    Id: string,
    Titulo: string,
    Sinopsis: string,
    UrlPortada: string,
    Genero: string,
    Duracion: number,
    Clasificacion: string,
    Direccion: string
}

const ListadoPeliculas = () =>{
    const[registros, setRegistros] = useState<Pelicula[]>([]);

    const listarPeliculas = () => {
        
    }

    const eliminar = async (pelicula: Pelicula) =>{
        if(!confirm(`¿Desea eliminar la película ${pelicula.Titulo}?`)){
            return;
        }

    }

    useEffect(()=>{
        listarPeliculas();
    }, []);
    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h1>Películas</h1>
            <a className="btn btn-primary" href="/peliculas">Nuevo</a>
        </div>
        <div className="container">
            <div className="row">
                {
                    registros.map(p => 
                    <div className="col-sm-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={p.UrlPortada} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{p.Titulo}</h5>
                                <p className="card-text">{p.Sinopsis}</p>
                                <p className="small fst-italic">{p.Genero}</p>
                                <p className="small">Duración: <span>{p.Duracion}</span> minutos</p>
                            </div>
                            <div className="card-footer d-flex justify-content-end gap-2">
                                <a href={`/peliculas/${p.Id}`} className="btn btn-primary">Editar</a>
                                <button className="btn btn-danger" onClick={()=> eliminar(p)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            
        </div>
        </>
    )
}

export default ListadoPeliculas;