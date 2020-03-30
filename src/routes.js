/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";


import Form1 from "views/examples/Forms/Form1";
import Form2 from "views/examples/Forms/Form2";
import Form3 from "views/examples/Forms/Form3";
import Form4 from "views/examples/Forms/Form4";
import Form5 from "views/examples/Forms/Form5"
import Form6 from "views/examples/Forms/Form6";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },

  {
    path: "/user-profile/demande extraction documents admin",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form1,
    layout: "/admin"
  },
  {
    path: "/user-profile/Demande de report de démarcation",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form2,
    layout: "/admin"
  }, 
  {
    path: "/user-profile/Demande de voir une épreuve",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form3,
    layout: "/admin"
  },
  {
    path: "/user-profile/Demande de changement de filiere",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form4,
    layout: "/admin"
  },
  {
    path: "/user-profile/Fiche d'information stage",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form5,
    layout: "/admin"
  },
  {
    path: "/user-profile/Letter d'affectation",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component:Form6,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
