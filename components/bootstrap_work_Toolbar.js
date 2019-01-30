import React from 'react';
import ToolbarLink from './ToolbarLink';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem   } from 'react-bootstrap';



// npm i @material-ui/styles --save
// npm install --save react-bootstrap


export default function Toolbar() {

{
              var Alert = require('react-bootstrap').Alert;
            }

	return(
    <Navbar  collapseOnSelect>  
        

        <Nav bg="dark"  pullRight>

              
                <NavItem eventKey={1}>Главная</NavItem>
              
                <NavDropdown eventKey={2} activeKey={2.1} title="Услуги" id="nav-dropdown" reverse>
                  <MenuItem eventKey={2.1}  >Обработка текстов</MenuItem>
                  <MenuItem eventKey={2.2}  >Копирайтинг</MenuItem>
                </NavDropdown>

                <NavItem eventKey={3}>Цены</NavItem>
                <NavItem eventKey={4}>Контакты</NavItem>

             
        </Nav>
    </Navbar>  
	);
};


// <Nav className="navbar navbar-expand-md navbar-light bg-light sticky-top"

// 
 // <header> 
 //      <Navbar>
 //        <Navbar.Header>
 //        </Navbar.Header>
 //        <Nav>
            
 //              <ToolbarLink to="/" className="nav-link active">
 //              <NavItem eventKey={1}>
 //              Главная
 //              </NavItem>
 //              </ToolbarLink>
              
             
 //              <ToolbarLink to="#">Услуги</ToolbarLink>
 //              <ToolbarLink to="/text-preparing" className="nav-link ">Обработка текстов</ToolbarLink>
 //              <ToolbarLink to="/copywriting" className="nav-link " >Копирайтинг</ToolbarLink>

 //              <ToolbarLink to="/prices" className="nav-link " >Цены</ToolbarLink>
 //              <ToolbarLink to="/contacts" className="nav-link ">Контакты</ToolbarLink>
 //            </div>
 //        </Nav>
 //      </Navbar>
 //    </header> 

// export default function Toolbar() {
//   return(
//     <header> 
//       <Paper>
//       <section>
//         <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
//           <div className="container-fluid">
//             <ToolbarLink to="/" className="nav-link active">Главная</ToolbarLink>
//             <ToolbarLink to="/services" className="nav-link ">Услуги</ToolbarLink>
//             <ToolbarLink to="/text-preparing" className="nav-link ">Обработка текстов</ToolbarLink>
//             <ToolbarLink to="/copywriting" className="nav-link ">Копирайтинг</ToolbarLink>
//             <ToolbarLink to="/prices" className="nav-link ">Цены</ToolbarLink>
//             <ToolbarLink to="/contacts" className="nav-link ">Контакты</ToolbarLink>
//           </div>
//         </nav>
//       </section>
//     </header> 
//   );
// };




// 
// <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
//         <div className="container-fluid">
//           <a href="#" className="navbar-brand"><img src="../img/logo.png" /></a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav ml-auto"> 
//               <li className="nav-item active">
//                 <a href="#" className="nav-link active">Главная</a>                  
//               </li>
//               <li className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-hashpopup="true" aria-expanded="false">Услуги</a>
//                 <div className="dropdown-menu">
//                   <a href="#" className="nav-link">Обработка текстов</a>
//                   <a href="#" className="nav-link">Копирайтинг</a>
//                 </div>
//               </li>

//               <li className="nav-item ">
//                 <a href="#" className="nav-link">Цены</a>
//               </li>
//               <li className="nav-item ">
//                 <a href="#" className="nav-link">Контакты</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>