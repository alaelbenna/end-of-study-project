import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import wc from '../img/wc.jpg'
import UnderDashboard from '../dashboard/UnderDashboard';
import Footer1 from '../decoration/Footer1'
import Footer from '../dashboard/Footer';

function Toilette() {

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

export default Toilette;