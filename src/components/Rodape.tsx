import Insta from './IMG/instagram-removebg-preview.png'
import Whatsapp from './IMG/whatsapp.png'

const Rodape = () => {

    return (
        <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-p'>
            <h3>Redes Sociais</h3>
            <div className='rede-social'>
              <a href="link-do-instagram" target="_blank"><img src={Insta} alt="Instagram"/></a> <br></br>
              <a href="link-do-instagram" target="_blank"><img src={Whatsapp} alt="Instagram"/></a>
            
            </div>
          </div>
          <div className='footer-p'>
            <h3>Informações de Contato</h3>
            <p>Telefone: (71985589348)</p>
            <p>Telefone: (71985589348)</p>
            <p>Telefone: (71985589348)</p>
            <p>Email: davelu@davelu.com</p>
            

            
          </div>
          <div className='footer-p'>
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#">Termos de Serviço</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Sobre Nós</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-inferior'>
          <p>&copy; 2023 Davelu Online.</p>
        </div>
      </footer>
    
    )
}

export default Rodape