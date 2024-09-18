import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContext from "./context/AuthContext";




const App = () => {
 
//! context sayfamız ile bütün browser ı sarmalladık
   return (
     <AuthContext>
     <AppRouter/>
     </AuthContext>
   );
   
  
  
};

export default App;
