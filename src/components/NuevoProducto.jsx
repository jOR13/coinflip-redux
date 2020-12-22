import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    console.log(cargando);

    //mandar a llamar el action 
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    //cuando el user haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        //validar formualrio
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }


        //revisar errores


        //crear nuevo producto
        agregarProducto({
            nombre, precio
        });

        //redireccionar

        history.push('/')


    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Create
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="precio"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">ADD</button>
                        </form>

                        {cargando ? <p className="mt-3">Cargando...</p> : null}
                        { error ? <p className="alert alert-danger p2 mt-3">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;
