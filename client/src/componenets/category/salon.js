import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer from '../dashboard/Footer';
import Footer1 from '../decoration/Footer1';
function Salon() {

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

export default Salon;