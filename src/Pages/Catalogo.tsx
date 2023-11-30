import Prada from '../components/IMG/prada1.jpg'
import Gucci from '../components/IMG/gucci1.jpg'
import LouisV from '../components/IMG/LouisV.jpg'
import Brand2 from '../components/IMG/brand2.png'
import Brand1 from '../components/IMG/brand1.png'
import Brand3 from '../components/IMG/brand3.png'
import Brand4 from '../components/IMG/brand4.png'
import Brand5 from '../components/IMG/brand5.png'
import Brand6 from '../components/IMG/brand6.png'
import TelaMenu from '../components/TelaMenu'
import '../Css/Catalogo.css'


const Catalogo = () => {

    return (
        <div>
        <TelaMenu/>
        <div>
            <div className="background">
       

       <div className="Meio">
           <h1>AS MELHORES PEÇAS</h1>
           <h1>MASCULINAS</h1>
           <p>Veja aqui nosso catalogo de camisas masculinas</p>
          <a href='/Cadastro'><button>Faça Seu Cadastro</button></a> 
       </div>
   </div>

   <section>
       <h1>CATALOGO:</h1>
       <div className="Container-card-1">
           <div className="cards">
               <img src={LouisV}/>
           </div>

           <div className="cards">
           <img src={LouisV}/>
           </div>
       </div>

       <div className="Container-card-1">
           <div className="cards">
           <img src={LouisV}/>
           </div>

           <div className="cards">
           <img src={LouisV}/>
           </div>
       </div>

       <div className="Container-card-1">
           <div className="cards">
           <img src={LouisV}/>
           </div>

           <div className="cards">
           <img src={LouisV}/>
           </div>
       </div>
   
   </section>


   <section>
    <h1>NOVAS PEÇAS</h1>
    <div className="Container-roupas">
        <div className="roupa">
             <img src={Prada}/>
            <p>PEÇA XXX</p>
            <h5>R$99,99</h5>
        </div>

       <div className="roupa">
        <img src={Gucci}/>
       <p>PEÇA XXX</p>
       <h5>R$99,99</h5>
      
   </div>

   <div className="roupa">
   <img src={Prada}/>
  <p>PEÇA XXX</p>
  <h5>R$99,99</h5>
</div>

<div className="roupa">
<img src={Gucci}/>
 <p>PEÇA XXX</p>
 <h5>R$99,99</h5>
</div>
</div>
</section>

<div className="Marcas">
    <img src={Brand1}/>
    <img src={Brand2}/>
    <img src={Brand3}/>
    <img src={Brand4}/>
    <img src={Brand5}/>
    
    
</div>

   
   
        </div>
        </div>
    )
}

export default Catalogo