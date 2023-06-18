import React from "react";
import { Outlet, Link } from "react-router-dom";

function Aboutpage() {
   return (
      <div>
         <h1>Aboutpage</h1>
         <p>This is a demo website anut React-router-dom library</p>
         <ul>
            <li>
               <Link to="contacts">Our contacts</Link>
            </li>
            <li>
               <Link to="team">Our team</Link>
            </li>
         </ul>

         <Outlet/>

         {
         /*<Routes>
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our team</p>} />
         </Routes> 
         */
         }
      </div>
   );
}

export { Aboutpage };
