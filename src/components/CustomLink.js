// may be used instead of Link or NAvLink
import { Link, useMatch } from "react-router-dom";

import React from "react";

function CustomLink({ children, to, ...props }) {

   const match = useMatch({
      path: to,
      end: to.length === 1
   });

   return (
      <Link
         to={to}
         style={{color: match ? 'red' : 'white'}}
         {...props}
      >
         {children}
      </Link>
   );
}

export { CustomLink };
