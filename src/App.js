import './App.css';
import logo from './img/starb.png';


function App() {
  return (
    <div className="container">

        <div className="header">
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
        </div>

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
          <div className="separatore">
        </div>

        <div className="immaginimenu">
          <div className="imgmenu1"></div>
          <div className="imgmenu2"></div>
        </div>
          


        </div>

    </div>
  );
}

export default App;
