import Masculina from './IMG/Camiseta-Modelo1.jpg'
import Feminina from './IMG/Blusa-Modelo1.jpg'
const PagInicial = () => {
    return (
      <main>
        <section>
          <div className="container">
            <div className="lado-esquerdo">
              <div className="itens">
                <div className="select-image">
                  <a href=''>
                  <img src={Masculina} alt="Masculino"/>
                  <img src={Feminina} alt="Feminina" />
                  </a>
              </div>

              </div>
            </div>
  
            <div className="lado-direito"></div>
          </div>
        </section>
      </main>
    );
  };
  
  export default PagInicial


