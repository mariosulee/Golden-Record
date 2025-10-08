
import Header from "./components/Header"
import Album from "./components/Album"

import{ useState, useEffect} from 'react'
import {db} from './data/db'

function App() {  //recordar q la funcion App es un componente de react
  
  //  ANTES DEL return() VA EL CODIGO EN JAVASCRIPT
   const initialCart=() => {
    const localStorageCart=localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []  //si localstoragecart tiene algo, lo convierto de string a array con parse, y si no, devuelvo el arreglo vacio
  }


  const[data,setData]=useState(db)   // inicio el state con el array db localizado en db.js
  const[cart,setCart]=useState(initialCart) //lo inicio con el contenido guardado en localStorage


  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart)) //localstorage no permite objetos o arrays asiq lo paso a string
  }, [cart]) //cada vez que cart cambie ejecutar el codigo ese

  function addToCart(item){

      const itemExists=cart.findIndex( (album) => album.id ===item.id)  //este metodo no muta el array, y compruebo que el id del item sea igual al del estado album. Devuelve -1 si el elemnto no se ha añadido al carrito aun, y sino devuelve el indice del primer elemento q cumple la condicion
      
      if(itemExists>=0){
        console.log("Este elemento ya existe en el carrito")
        
        const copiaCart=[...cart] //tomo una copia del carrito
        copiaCart[itemExists].quantity++  //aumento la cantidad en el album cuyo indice sea usando una copia para no modificar el estado de cart
        setCart( copiaCart )  //siempre q escriba en mi carrito tengo que setearlo, OJO que no hay corchetes

      } else{
        console.log("agregando item al carrito...")
        item.quantity=1
        setCart( [...cart, item] ) // llamo a la funcion setCart q modifica el estado cart, la cual añade a lo q hay en carrito el album al que has hecho click
        //con los corchetes devuelvo un array, sino estuviesen estaria devolviendo un objeto ya que item (album) es un objeto. asiq lo convierto a un array
      } 

      saveLocalStorage()
  }



  function removeFromCart(id){
    console.log(`Eliminando articulo ID  ${id}`)
    setCart( prevCart => prevCart.filter (album => album.id !== id) )  //basicamente settear el cart con todos los albumes que no tengan el id del que eliminamos pulsando la cruz roja
  }


  function increaseQuantity(id){
    console.log("se ha añadido una unidad al articulo", id)
    
    const updatedCart=cart.map( item => {  //accedo a cada item del carrito. Map creara otro array que se guardara en updatedCart

      if(item.id===id){
        return{      //llaves pq se esta devolviendo un objeto con todas las propiedades del item album pero cambiando el valor de quantity
          ...item,  
          quantity:item.quantity+1
        }
      }
      return item //si no cumple el if, devuelve el item SIN cambios
    })
    setCart(updatedCart)
  }

  function decreaseQuantity(id){
    console.log("Se ha decrementado la cantidad del articulo", id)
    const updatedCart=cart.map(item=> {
        if(item.id===id && item.quantity>1){
          return{
            ...item,
            quantity:item.quantity-1
          }
        }
        return item
    })
    setCart(updatedCart)
  }


  function clearCart(){
    setCart([])
    console.log("Se ha vaciado el carrito")
  }


  function saveLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))  //localstorage no puede almacenar arrays asi q lo convierto a string
  }









  return (
    <>  {/* esto es un FRAGMENT de react en el que se pone todo el JSX*/}
      
      {/*pongo el componente Header en el que Header.jsx esta todo el codigo*/}
        
      <Header 
        //props
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />  


      <main className="container-xl mt-5">
          <h2 className="text-center">Vinyl records for sale</h2>

          <div className="row mt-5"> {/*para q se vea en grid*/}

            {/* Tarjeta de Álbum. El codigo entre {} es de JS */}
            {
              data.map((album) => (// el map nos va a generar un nuevo array y hay que devolverlo. Siempre devuelve un return que aqui va implicito. Accedo a cada objeto (album) del array
                   <Album    //muestro cada album 9 veces pq hay 9 componentes en el array. Album es el componente hijo aqui
                    key={album.id}  //esto lo indica react
                    album={album}   //le paso a cada componente Album un prop album que contiene un objeto con toda la info de cada album
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                   /> 
                ))//accedo asi a data que es un state y con map comienzo a iterar y generar un componente (un album) por cada elemento de ese array
              
                //esta siguiente lleva cierra el codigo JS:
            } 
  
          </div>
        
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">
              Golden Record - Mario Sulé Domínguez. All rights reserved © 2025
            </p>
          </div>
      </footer>

      
    </>
  )
}

export default App
