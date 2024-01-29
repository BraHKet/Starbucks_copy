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
                <li id='caffe1'>Il nostro caffè</li>
                <li id='caffe2'>Espresso</li>
                <li id='caffe3'>Preparazione caffè</li>
              </ul>
            </div>
          </div>
          <div className="menu">MENÙ</div>
          <div className="responsabilita">RESPONSABILITÀ</div>
          <div className="community">COMMUNITY</div>
          <div className="sudinoi">SU DI NOI</div>
        </div>

        <div className="info" > Un gusto unico come quello di casa. Scopri i nostri caffè Starbucks<sup>®</sup>
         da poter preparare comodamente a casa tua. <br /> Goditi una tazza di caffè 100% Arabica o una bevanda Starbucks <sup>®</sup> 
        , quando e come vuoi tu.</div>
        <div className="bio"></div>
    </div>
  );
}

export default App;
