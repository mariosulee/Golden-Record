
import Header from "./components/Header"

function App() {  //recordar q la funcion App es un componente de react
  
  return (
    <>  {/*esto es un fragmento de react en el que se pone todo el JSX*/}
      
      <h1>Golden Record</h1>
      <h3>An app by Mario Sulé</h3>

      <Header />
      <header class="py-5 header">
          <div class="container-xl">
              <div class="row justify-content-center justify-content-md-between">
                  <div class="col-8 col-md-3">
                      <a href="index.html">
                          <img class="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                      </a>
                  </div>
                  <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                      <div 
                          class="carrito"
                      >
                          <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                          <div id="carrito" class="bg-white p-3">
                              <p class="text-center">El carrito esta vacio</p>
                              <table class="w-100 table">
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
                                      <tr>
                                          <td>
                                              <img class="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                          </td>
                                          <td>SRV</td>
                                          <td class="fw-bold">
                                                  $299
                                          </td>
                                          <td class="flex align-items-start gap-4">
                                              <button
                                                  type="button"
                                                  class="btn btn-dark"
                                              >
                                                  -
                                              </button>
                                                  1
                                              <button
                                                  type="button"
                                                  class="btn btn-dark"
                                              >
                                                  +
                                              </button>
                                          </td>
                                          <td>
                                              <button
                                                  class="btn btn-danger"
                                                  type="button"
                                              >
                                                  X
                                              </button>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>

                              <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                              <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </header>










      <main class="container-xl mt-5">
          <h2 class="text-center">Vinyl records for sale</h2>

          <div className="row mt-5">


          {/* Tarjeta de Álbum */}
          <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Reckless (1984 reissue)</h2>
                  <h3 className="album-artist">By Bryan Adams</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/reckless_09.jpg" alt="Reckless album" style={{ width: "200px"}}
/>
                  <div className="card-body mt-3">
                    <p>"Reckless" is a melodic rock album that channels high energy and unrestrained emotion. Its songs capture the thrill of youth, boldness, and living without limits, blending powerful guitar riffs and heartfelt lyrics.</p>
                    <p className="fw-bold text-primary fs-4">$19.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>



          
          <div className="col-md-6 col-lg-4 my-4">
            <div className="card h-100 text-center">
              <h2 className="fs-3 fw-bold text-uppercase mt-3">Fearless (Taylor's Version)</h2>
              <h3 className="album-artist">By Taylor Swift</h3> 
              <img className="d-block mx-auto mb-3" src="./public/img/fearless_02.png" alt="Fearless album" style={{ width: "200px"}}/>
              
              
              <div className="card-body mt-3">
                <p>The re-recording of Fearless captures the feelings of nostalgia, young love, and memories of your hometown. With country and heartfelt melodies, the album tells stories of chasing dreams and letting some things behind.</p>
                <p className="fw-bold text-primary fs-4">$29.99</p>
                <button type="button" className="btn btn-dark w-100">Add to cart</button>
              </div>
            </div>
          </div>

          

              <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">First Two Pages of Frankenstein</h2>
                  <h3 className="album-artist">By The National</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/firsttwo_03.jpg" alt="First Two Pages of Frankenstein album" style={{ width: "200px"}}/>
                  <div className="card-body mt-3">
                    <p>"First Two Pages of Frankenstein" blends The National's melancholic indie rock with introspective lyrics, exploring memory, solitude, and emotional fragility through rich, atmospheric instrumentation.</p>
                    <p className="fw-bold text-primary fs-4">$21.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>


              <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Plastic Hearts</h2>
                  <h3 className="album-artist">By Miley Cyrus</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/plastic_04.jpg" alt="Plastic Hearts album" style={{ width: "200px"}}/>
                  <div className="card-body mt-3">
                    <p>"Plastic Hearts" delivers raw rock with powerful guitar riffs and gritty vocals. It channels heartbreak and unbridled spirit, capturing the record's wild energy and fearless attitude of constant reinvention and self-expression.</p>
                    <p className="fw-bold text-primary fs-4">$35.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>


              <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Zach Bryan</h2>
                  <h3 className="album-artist">By Zach Bryan</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/zach_05.jpg" alt="Zach Bryan 2023 album" style={{ width: "200px"}}/>
                  <div className="card-body mt-3">
                    <p>"Zach Bryan" is a melodic country album that tells stories of love, loss, and life’s struggles. Its music blends gentle melodies with emotional lyrics, creating a reflective and moving listening experience.</p>
                    <p className="fw-bold text-primary fs-4">$19.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>


              <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Mira Dentro</h2>
                  <h3 className="album-artist">By Maldita Nerea</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/mira_06.jpg" alt="Mira album" style={{ width: "200px"}} />
                  <div className="card-body mt-3">
                    <p>"Mira Dentro" is a pop-rock album that explores themes of love and endless hope. Its melodies are uplifting and heartfelt, reflecting the Spanish band’s signature energetic and emotional style.</p>
                    <p className="fw-bold text-primary fs-4">$16.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>



            <div className="col-md-6 col-lg-4 my-4">
            <div className="card h-100 text-center">
              <h2 className="fs-3 fw-bold text-uppercase mt-3">Swimming</h2>   {/*fs-2 es fontsize 2, mas grande*/}
              <h3 className="album-artist">By Mac Miller</h3>

              <img className="d-block mx-auto mb-3" src="./public/img/swimming_01.png" alt="album" style={{ width: "200px"}}/>
              
              <div className="card-body mt-3">
                <p>Swimming" is Mac Miller’s fifth studio album. It explores themes of self-reflection, growth, and struggle. It blends hip-hop, jazz, and soul influences, capturing his journey through life, love, and mental health.</p>
                <p className="fw-bold text-primary fs-4">$49.99</p>
                <button type="button" className="btn btn-dark w-100">Add to cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Evermore</h2>
                  <h3 className="album-artist">By Taylor Swift</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/evermore_07.jpg" alt="Evermore album" style={{ width: "200px"}}/>
                  <div className="card-body mt-3">
                    <p>"Evermore" is a folk and alternative album that reflects on the impermanence of life and nostalgia. Its sound captures moments of sadness, but with the hope that neither the good nor the bad lasts forever.</p>
                    <p className="fw-bold text-primary fs-4">$39.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>


              <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">Dawn FM</h2>
                  <h3 className="album-artist">By The Weeknd</h3> 
                  <img className="d-block mx-auto mb-3" src="./public/img/dawn_08.jpg" alt="Dawn FM album" style={{ width: "200px"}}/>
                  <div className="card-body mt-3">
                    <p>This synth-electronic album guides listeners through reflection on life, regrets, and acceptance. Its immersive production conveys a surreal journey toward light and resolution.</p>
                    <p className="fw-bold text-primary fs-4">$13.99</p>
                    <button type="button" className="btn btn-dark w-100">Add to cart</button>
                  </div>
                </div>
              </div>    
              </div>
        
      </main>


      <footer class="bg-dark mt-5 py-5">
          <div class="container-xl">
              <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>

      
    </>
  )
}

export default App
