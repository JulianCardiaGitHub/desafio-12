import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import productos from './constants/productos'
import { v4 as uuidv4 } from 'uuid';


const InicioApp = () => {
  
  const [products, setProducts] = useState(productos)
  
  const [productoAEditar, setProductoAEditar] = useState(null)

  const agregarProducto = (producto) => {
    producto.id = uuidv4()
    console.log('Agregando el producto al array...', producto)

    const nuevoEstadoProductos = [...products, producto]
    
    setProducts(nuevoEstadoProductos) 
  }



  const editarProducto = (productoEditado) => {
    
    const nuevoEstadoProductos = products.map(function(prod) {
      
      if ( prod.id === productoEditado.id ) {
        return productoEditado
      } else {
        return prod
      }
    })

    setProducts(nuevoEstadoProductos)

  }


  const eliminarProducto = (id) => { 
    const nuevoEstadoProductos = products.filter(function(prod) {
      
      if ( prod.id !== id ) {
        return prod
      } else {
        console.log(prod, '----> Producto que se va a eliminar', id)
      }
    })
    console.log(nuevoEstadoProductos)
    setProducts(nuevoEstadoProductos) 
  }



  return (
    <div className="container">
      <Formulario 
        agregarProducto={agregarProducto}
        productoAEditar={productoAEditar}
        setProductoAEditar={setProductoAEditar}
        editarProducto={editarProducto}
      />
      <Tabla 
        products={products} 
        eliminarProducto={eliminarProducto}
        setProductoAEditar={setProductoAEditar}
      />
    </div>
  )
}



export default InicioApp