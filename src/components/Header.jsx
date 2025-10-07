import {useMemo} from 'react'  //es un hook q sirve para no hacer render completo de la aplicacion hasta que cambie algo q yo le diga. esto hace todo menos costoso 


function Header( {cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} ){  //tomo el estado cart con el prop del padre

    //State derivado: porque va a depender de otro estado, en este caso de cart 
    const estaVacio = useMemo( () => cart.length===0 ,  [cart])  //cart es el array de dependencias. Vuelve a hacer el render cuando carrito cambio. useMemo se podria usar tb con cartTotal

    //Para el total a pagar, hacer otro state derivado (q es una funcion, cuando se llama se tienen q poner los parentesis) con el array method reduce, el cual iterara sobre el estado cart. Este reduce toma dos parámetros: uno es el total acumulado, y otro es el item (q es el elemento actual). Retornamos la formula
    const cartTotal = ()=> cart.reduce ( (total, item) => total + (item.quantity*item.price), 0) //el carrito empieza en 0

    return(
        <header className="py-5 header">
          <div className="container-xl">
              <div className="row justify-content-center justify-content-md-between">
                  <div className="col-8 col-md-3">
                      <a href="index.html" style={{marginTop:30}}>
                       
                          <h1 style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: 0}}>Golden Record</h1>

                          <p> 📀 An App by Mario Sulé</p>
                      </a>
                  </div>
                  <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                      <div 
                          className="carrito"
                      >
                          <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                          <div id="carrito" className="bg-white p-3">

                            { estaVacio ? (
                                <p className="text-center">El carrito esta vacio</p>
                            ) : (   // operador ternario: si esta vacio informar, sino, devolver todo eso
                              <>   
                                <table className="w-100 table">
                                  <thead>
                                      <tr>
                                          <th>Imagen</th>
                                          <th>Nombre</th>
                                          <th>Precio</th>
                                          <th>Cantidad</th>
                                          <th></th>
                                      </tr>
                                  </thead>

                                  <tbody>

                                    {/* NUEVO: HAY QUE ITERAR SOBRE EL carrito de compras. Va a retornar todo lo siguiente que va entre parentesis*/}
                                    { cart.map(album => (
                                        <tr key={album.id}>
                                          <td>
                                              <img className="img-fluid" src={album.image} alt="imagen guitarra" />
                                          </td>
                                          <td>{album.title}</td>
                                          <td className="fw-bold">
                                                  {album.price} €  
                                          </td>
                                          <td className="flex align-items-start gap-4">
                                              <button
                                                  type="button"
                                                  className="btn btn-dark"
                                                  onClick={() => decreaseQuantity(album.id)}
                                              >
                                                  -
                                              </button>
                                                  {album.quantity}
                                              <button
                                                  type="button"
                                                  className="btn btn-dark"
                                                  onClick={ () => increaseQuantity(album.id)}
                                              >
                                                  +
                                              </button>
                                          </td>
                                          <td>
                                              <button
                                                  className="btn btn-danger"
                                                  type="button"
                                                  onClick={ () => removeFromCart(album.id)} // sin parentesis pq asi react ejecuta la funcion solo cuando se hace click
                                              >
                                                  X
                                              </button>
                                          </td>
                                      </tr>
                                    
                                    ))} 

                                  </tbody>
                              </table>

                
                              <p className="text-end">Total pagar: <span className="fw-bold">{cartTotal().toFixed(2)}€</span></p>  
                              <button 
                              className="btn btn-dark w-100 mt-3 p-2"
                              onClick={clearCart}
                              >Vaciar Carrito
                              </button>
                          </>
                          )}
                          
                        </div>
                      </div>
                  </nav>
              </div>
          </div>
      </header>
            
        
        
    )
}

export default Header
