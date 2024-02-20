import { useEffect, useState } from 'react';
import './App.css';
import logo from './img/starb.png';


function App() {
  const [variabile, setVaribile] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    if(windowSize<920) {
      setVaribile(false);   
    }
    else {
      setVaribile(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);




  return (
    <div className="container">
        {variabile === true && <div className="header">
          <img src={logo} alt=''/>
          <div className="caffe">CAFFÈ
            <div className="sub_caffe">
              <ul>
                <li className='caffe1'>Il nostro caffè</li>
                <li className='caffe2'>Espresso</li>
                <li className='caffe3'>Preparazione caffè</li>
              </ul>
            </div>
          </div>
          <div className="menu">MENÙ
            <div className="sub_menu">
              <ul>
                <li className='menu1'>Bevande Starbucks</li>
                <li className='menu2'>Cibo</li>
              </ul>
            </div>
          </div>
          <div className="responsabilita">RESPONSABILITÀ
            <div className="sub_resp">
              <ul>
                <li className='resp1'>Approvvigionamento di caffè</li>
                <li className='resp2'>Sostegno agli agricoltori</li>
                <li className='resp3'>Tè di provenienza etica</li>
                <li className='resp4'>Approvvigionamento di cacao</li>
              </ul>
            </div>
        </div>
          <div className="community">COMMUNITY</div>
          <div className="sudinoi">SU DI NOI
            <div className="sub_sudinoi">
              <ul>
                <li className='sudinoi1'>Store Location</li>
                <li className='sudinoi2'>Informazioni aziendali</li>
                <li className='sudinoi3'>Il nostro patrimonio</li>
              </ul>
            </div>
          </div>
        </div>}

        {variabile === false && <div className="header">
            <a href='www.google.com'>ciao</a>
          </div>}






        <div className="imgHome">
          <img src='https://www.starbucks.it/wp-content/uploads/2023/01/Banner_Hero_HP.jpg' alt=''/>
        </div>

        <div className="info" >
          <h2>Il caffè Starbucks <sup>®</sup>. <br /> Preparalo a casa come piace a te.</h2>
          <span> Un gusto unico come quello di casa. Scopri i nostri caffè Starbucks<sup>®</sup>
         da poter preparare comodamente a casa tua. <br /> Goditi una tazza di caffè 100% Arabica o una bevanda Starbucks <sup>®</sup> 
        , quando e come vuoi tu. </span>
        </div>

        <div className="ilnostromenu">
          <h1>IL NOSTRO MENÙ</h1>
          <div className="separatore"></div>

        <div className="immaginimenu">
          <div className="imgmenu1">
            <div className="imgmenu1-sott">CIBO STARBUCKS</div>
          </div>
          <div className="imgmenu2">
          <div className="imgmenu2-sott">BEVANDE STARBUCKS</div>
          </div>
        </div>
        </div>

      <div className="inostricaffe">
        <div className="testo">
          <h1>I NOSTRI CAFFÉ</h1>
          <p>Hai trovato il tuo caffè Starbucks <sup>®</sup> preferito da preparare a casa? Perché non conoscere di più il mondo del caffè?
             Bevi un caffè e goditi i nostri articoli sul viaggio del caffè, la sostenibilità e lo stile di vita.</p>
          <br/>
          <a href='www.google.com'>Scopri di più</a>

        </div>
        
      </div>

    </div>
  );
}

export default App;
