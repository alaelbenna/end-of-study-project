import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import drs from '../img/drs.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration/Footer1';
import Footer from '../dashboard/Footer';
function Dressing () {

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

export default Dressing;