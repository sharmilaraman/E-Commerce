import React from "react";
import './DescriptionBox.css';
function DescriptionBox(){
     return(
          <div className="descriptionbox">
               <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
               </div>
               <div className="descriptionbox-description">
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of 
                         products or services over the internet. It serves as a virtual marketplace where businesses 
                         and individuals showcase their products, interact with customers, and conduct transactions 
                         without the need for a physical presence. E-commerce websites have gained immense popularity due 
                         to their convenience, accessibility, and the global reach they offer. This has transformed the 
                         way people shop, making it possible to browse and purchase products from anywhere in the world at
                          any time.</p>
                          <p> E-commerce websites provide businesses with a cost-effective way to 
                          expand their customer base, increase sales, and enhance their brand presence. Overall, 
                          e-commerce websites have revolutionized the retail industry, offering unparalleled opportunities 
                          for growth, innovation, and customer engagement.</p>
               </div>

          </div>
     )
}
export  default DescriptionBox;