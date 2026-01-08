
const Footer = () => {  
  return ( 
<div className=" bg-white h-fit">
  <div className="w-11/12 grid grid-cols-3 place-items-center py-7">
   <div>
    <h2 className="font-bold text-xl pb-3">Company</h2>
    <ul>
        <li>About Us</li>
        <li className="py-3">Our Mission</li>
        <li>Contact Us</li>
    </ul>
   </div>
   <div>
    <h2 className="font-bold text-xl pb-3">Services</h2>
    <ul>
        <li>Products & Services</li>
        <li className="py-3">Customer Stories</li>
        <li>Download Apps</li>
    </ul>
   </div>
   <div>
    <h2 className="font-bold text-xl pb-3">Information</h2>
    <ul>
        <li>Privacy Policy</li>
        <li className="py-3">Terms & Conditions</li>
        <li>Join Us</li>
    </ul>
   </div>
  </div>
   <div className="w-11/12 mx-auto text-center pb-5">
        <hr className="pb-4" />
        &copy;2025 Hero App. All rights reserved.
    </div>
  </div>
  );
};

export default Footer;