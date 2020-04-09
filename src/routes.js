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



import Form1 from "components/Forms/Form1";
import Form2 from "components/Forms/Form2";
import Form3 from "components/Forms/Form3";
import Form4 from "components/Forms/Form4";
import Form5 from "components/Forms/Form5"
import Form6 from "components/Forms/Form6";
import Services from "components/Services";


var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin"
  // },
  {
    path: "/Services",
    name: "Services",
    icon: "ni ni-tv-2 text-primary",
    component: Services,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },

  {
    path: "/user-profile/demande extraction documents admin",
    name: "demande extraction documents admin",
    icon: "ni ni-single-02 text-yellow",
    component:Form1,
    layout: "/admin"
  },
  {
    path: "/user-profile/Demande de report de démarcation",
    name: "Demande de report de démarcation",
    icon: "ni ni-single-02 text-yellow",
    component:Form2,
    layout: "/admin"
  }, 
  {
    path: "/user-profile/Demande de voir une épreuve",
    name: "Demande de voir une épreuve",
    icon: "ni ni-single-02 text-yellow",
    component:Form3,
    layout: "/admin"
  },
  {
    path: "/user-profile/Demande de changement de filiere",
    name: "Demande de changement de filiere",
    icon: "ni ni-single-02 text-yellow",
    component:Form4,
    layout: "/admin"
  },
  {
    path: "/user-profile/Fiche d'information stage",
    name: "Fiche d'information stage",
    icon: "ni ni-single-02 text-yellow",
    component:Form5,
    layout: "/admin"
  },
  {
    path: "/user-profile/Letter d'affectation",
    name: "Letter d'affectation",
    icon: "ni ni-single-02 text-yellow",
    component:Form6,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
