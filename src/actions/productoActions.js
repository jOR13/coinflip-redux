import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
//Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar a la db
      await clienteAxios.post("/productos", producto);
      //await axios.post('http://localhost:1337/productos', producto)
      dispatch(agregarProductoExito(producto));
      //alerta
      Swal.fire("Correcto", "Se agrego de manera correcta", "success");
    } catch (error) {
      console.log(error);
      //si hay un error cambiar el state
      dispatch(agregarProductoError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "hubo un error intente de nuevo",
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

//si el produto se guarda en la db
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});
//si el falla al insertarse
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

// Función que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
      dispatch( descargarProductos() );

      try {
          const respuesta = await clienteAxios.get('/productos');
          dispatch( descargaProductosExitosa(respuesta.data) )
          console.log(respuesta.data)
      } catch (error) {
          console.log(error);
          dispatch( descargaProductosError() )
      }
  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
});

const descargaProductosExitosa = productos => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})
const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR, 
  payload: true
});