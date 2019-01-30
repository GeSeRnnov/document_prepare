import React from 'react';
import ToolbarLink from './ToolbarLink';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

// npm i @material-ui/styles --save

 const open = React.useState(false);
  const setOpen = React.useState(false);
  
  const anchorEl = React.useRef(null);

class Toolbar extends React.Component {

  constructor(props){
    super(props)
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.chck = this.chck.bind(this);
  }

 

  handleToggle() {
    setOpen(!open);
  }

  handleClose(event) {

    // if(anchorEl.current.contains(event.target)){
      // return;
    // }

    setOpen(false);
    return;

  }

  chck(vl='') {
    console.log('done '+ vl);
  }


Render(){
	return(
    <header> 
      <Paper>
        <MenuList>
            <div className="container-fluid nav-list" >
              <ToolbarLink to="/" className="nav-link active">Главная</ToolbarLink>
              
              <ButtonBase 
                buttonRef={"anchorEl"}
                aria-owns={ open ? "menu-list-grow" : undefined }
                aria-hashpopup="true"
                disabled = {false}
                onClick = {this.handleToggle}
              >
                <ToolbarLink to="/services" className="nav-link">
                  <div id="service-list1">
                    Услуги
                  </div>
                </ToolbarLink>
              </ButtonBase>

              <Popper open={ open } anchorEl={ anchorEl.current } transition >
                { ({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id = "menu-list-grow"
                    style = {{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <ToolbarLink to="/text-preparing" className="nav-link " onClick={this.handleClose}>Обработка текстов</ToolbarLink>
                          <ToolbarLink to="/copywriting" className="nav-link " onClick={this.handleClose}>Копирайтинг</ToolbarLink>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>                  
                )}
              </Popper>
              

              <ToolbarLink to="/prices" className="nav-link ">
                  <div id="service-list">
              Цены
                  </div>
              </ToolbarLink>
              <ToolbarLink to="/contacts" className="nav-link ">Контакты</ToolbarLink>
            </div>
        </MenuList>
      </Paper>
    </header>	
	);
}
}


export default  Toolbar;


// 
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