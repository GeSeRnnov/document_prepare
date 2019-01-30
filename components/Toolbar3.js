import React from 'react';
import ToolbarLink from './ToolbarLink';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/styles';
// import { install } from '@material-ui/styles';

// install();



// npm i @material-ui/styles --save

// const styles = theme => {
//   root: {
//     flexGrow: 1,
//   },
// }

export default function Toolbar() {



  const useStyles = makeStyles(theme => (
  {
    root: {
      display: 'flex',
    },
    paper: {
      top: '24px' ,
      color: 'red',
      transformOrigin: '50px 50px',
    },

  }));



  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorEl = React.useRef(null);

  function handleToggle() {
    setOpen(!open);
    // console.log(anchorEl.current.style.height);
  }

  function handleClose(event) {

    // if( anchorEl.current.contains(event.target) ){
    //   return;
    // }

    setOpen(false);
    return;

  }

  // function chck(vl='') {
  //   console.log('done '+ vl);
  // }

  // const slist = document.getElementById('service-list');
  // slist.addEventListener("click", chck);

  // const { classes } = this.props;

	return(
    <header> 
      <Paper className="toolbar-paper" sticky="top">
        <Grid className={ classes.root } container direction="row" justify="flex-end" style={{paddingRight: '50px'}} >
              <ToolbarLink to="/" className="nav-link active">Главная</ToolbarLink>
              
              <ButtonBase 
                aria-owns={ open ? "menu-list-grow" : undefined }
                onClick = {handleToggle}
              >
                <ToolbarLink to="#" className="nav-link" id="services">
                    Услуги
                </ToolbarLink>
              </ButtonBase>

              <Popper open={ open } anchorEl={ anchorEl.current } transition disablePortal >
                { ({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id = "menu-list-grow"
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper className={classes.paper}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <ToolbarLink to="/text-preparing" className="nav-link " onClick={handleClose}>Обработка текстов {placement}</ToolbarLink>
                          <ToolbarLink to="/copywriting" className="nav-link " onClick={handleClose}>Копирайтинг</ToolbarLink>
                          <ToolbarLink to="/office-macro" className="nav-link " onClick={handleClose}>Офисные макросы</ToolbarLink>
                          <ToolbarLink to="/site-developing" className="nav-link " onClick={handleClose}>Разработка сайтов</ToolbarLink>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>                  
                )}
              </Popper>

              <ToolbarLink to="/prices" className="nav-link " >Цены</ToolbarLink>
              <ToolbarLink to="/contacts" className="nav-link ">Контакты</ToolbarLink>
        </Grid>
      </Paper>
    </header>	
	);
};


// 
            // <div className="container-fluid nav-list" >
// <div id="service-list">
//               Цены
//                   </div>


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