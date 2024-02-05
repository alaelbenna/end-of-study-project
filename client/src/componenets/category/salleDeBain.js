import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import slb from '../img/slb.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration/Footer1';
import Footer from '../dashboard/Footer';
function SalledeBain() {

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

export default SalledeBain;