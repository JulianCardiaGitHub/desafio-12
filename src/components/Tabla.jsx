import TablaFila from "./TablaFila";

const Tabla = ({products, eliminarProducto, setProductoAEditar}) => {

  return (
    <>
      <h2>Lista de Usuarios</h2>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Color Favorito </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
              products.map((product, idx) => (
                <TablaFila 
                  key={idx} 
                  product={product} 
                  eliminarProducto={eliminarProducto} 
                  setProductoAEditar={setProductoAEditar}
                />
              ))
            }
        </tbody>
      </table>

    </>
  );
};

export default Tabla;

