import React, {useState} from 'react';
import Choose from './Choose';
import Navbar from '../Navbar/Navbar';
import bad from '../img/bad.jpg';
import Footer1 from '../decoration/Footer1';
import UnderDashboard from '../dashboard/UnderDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../dashboard/Footer';

function Bureau() {

    return (
   <div>
    <Navbar/>

<div>
</div>    

    
<Choose/>
<UnderDashboard/>
<Footer1/>
<Footer/>
   </div>
    );
}

export default Bureau;