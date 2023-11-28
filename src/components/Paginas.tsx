import Masculina from './IMG/Novo1.jpg'
import Feminina from './IMG/Novo2.jpg'

const Paginas =  () => {
    return (
        <div className='Pags'>
            <div>
                <a href=''>
                <img className='Pags' src={Masculina} alt= "Masculino"/>

                </a>
                        <div className='Titulo1'>
            <a href=''><p>Masculino</p></a>
            </div>
            
            </div>

            <div>
                <a href=''>
                <img className='Pags' src={Feminina} alt="Feminina"/>
                </a>
            
            <div className='Titulo1'>
            <a href=''><p>Feminino</p></a>
            </div>
            

            </div>
            </div>
           
    )
}

export default Paginas

          
        
            
         