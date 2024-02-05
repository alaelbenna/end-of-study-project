import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import cs from '../img/cs.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration/Footer1';
import Footer from '../dashboard/Footer';
function Cuisine () {

    return (
   <div>
    <Navbar/>

       
   
<Choose/>
<UnderDashboard/>
<Footer1/>
<Footer/>
   </div>
    );
}

export default Cuisine;