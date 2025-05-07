
import { useState } from 'react';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png"
import Link from './Link';
import { SelectedPage } from '@/utility/types';

// !types and value 
type Props ={
 readonly selectedPage:SelectedPage;
 readonly setSelectedPage:(value:SelectedPage)=> void
}



function Navbar({selectedPage,setSelectedPage}:Props) {
    // common css class 
    const flexBetween = "flex items-center justify-between"

    
  return (
    <section>

     <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>


        <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`  LEFT-SIDE ${flexBetween} w-full gap-16`}>
        <img src={Logo} alt="" />
        <div className={`RIGHT-SIDE ${flexBetween} gap-8 text-sm`}>
            {/* links will be here  */}
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
          <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
          <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
        </div>
        <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
        <button>Become a Member</button>
        </div>
        </div>
        </div>
    </div>
     </nav>

    </section>
  )
}

export default Navbar
