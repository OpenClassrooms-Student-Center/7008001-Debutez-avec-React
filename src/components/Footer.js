import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Inscription à la newsletter avec l'adresse e-mail : ${email}`)
  }

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-newsletter'>
        <h2>Inscrivez-vous à notre newsletter</h2>
        <p>Recevez des offres spéciales et des mises à jour directement dans votre boîte de réception.</p>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Entrez votre adresse mail'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <div className="lmj-footer-slogan">
        <p>Transformez votre espace en un jardin de rêve avec nos plantes exceptionnelles.</p>
      </div>
    </footer>
  );
}

export default Footer
