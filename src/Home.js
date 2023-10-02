import logo1 from './components/image/heart-rate-monitor_3703527.png';
import logo2 from './components/image/brainstorm_1786985.png';
import logo3 from './components/image/stomach_9056025.png';
import logo4 from './components/image/orthopedics_6177173.png';
import logo5 from './components/image/black-ribbon_6056687.png';
import logo6 from './components/image/embryo_819056.png';
import logo7 from './components/image/lungs_1834916.png';
import logo8 from './components/image/pediatric.png';
import logo9 from './components/image/services_5346638.png';
import logo10 from './components/image/blueprint_2704934.png';
import logo11 from './components/image/hos.jpg';
import './App.css';
import {Link } from 'react-router-dom';
import Nav from './components/Nav';
import Appointment from './components/Appointment';
import Special from './components/Special';
import Footer from './components/Footer';



function Home() {
  return (
    <div className="App">
      <Nav/>
      <div className="aim">
        <h1>The <span>AIIMS</span> World of <span>Care</span></h1>
        <p>Welcome to AIIMS Hospital, a world-renowned medical institution committed to excellence in healthcare. With state-of-the-art facilities and a dedicated team of experts, we provide cutting-edge medical services, education, and research. Your well-being is our priority, and we strive to deliver compassionate and personalized care to every patient. Experience the pinnacle of medical expertise at AIIMS Hospital, where innovation meets compassion. Your journey to better health starts here.</p>
        <Link to="/Adminlogin" className="btn2" >View Health Records</Link>
      </div>
      <p className="bot">+Learn about the world class healthcare we provide</p>
      <Appointment/>
        <p className="bot2">+Learn about the world class healthcare we provide</p>
        <div className='why'>
          <h1>Why<span> Choose AIIMS</span> Healthcare</h1>
        </div>
        <div className='why2'>
          <p>Established by Dr Prathap C Reddy in 1983, AIIMS Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, AIIMS Hospitals has touched more than 200 million lives from over 120 countries.</p>
        </div>
        <div className='why3'>
        <div className='why4'>
        <img src={logo9} className="logo9" alt="logo" />
        <h1>73+</h1>
        <p>Largest private healthcare network of Hospitals in India</p>
        </div>
        <div className='why4'>
        <img src={logo9} className="logo9" alt="logo" />
        <h1>400+</h1>
        <p>Largest private network of clinics across India</p>
        </div>
        <div className='why4'>
        <img src={logo10} className="logo10" alt="logo" />
        <h1>1100+</h1>
        <p>Diagnostic centres across India</p>
        </div>
        <div className='why4'>
        <img src={logo10} className="logo10" alt="logo" />
        <h1>5000+</h1>
        <p>Pharmacies across India</p>
        </div>
        <div className='why4'>
        <img src={logo10} className="logo10" alt="logo" />
        <h1>11000+</h1>
        <p>Doctors present across India</p>
        </div>
        <div className='why4'>
        <img src={logo10} className="logo10" alt="logo" />
        <h1>10000+</h1>
        <p>Pin codes Served across India</p>
        </div>
        </div>
        <p className="bot3">+Learn about the world class healthcare we provide</p>
      <Special/>
      <Footer/>
      </div>
    
  );
}

export default Home;
