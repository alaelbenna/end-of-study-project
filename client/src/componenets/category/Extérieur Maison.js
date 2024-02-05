import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import exm from '../img/exm.jpg';
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration/Footer1';
import Footer from '../dashboard/Footer';
function Extérieur() {

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

export default Extérieur;