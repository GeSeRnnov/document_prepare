import React from 'react';
import ToolbarLink from './ToolbarLink';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/styles';
// import { withStyles } from '@material-ui/core/styles';

// import { install } from '@material-ui/styles';

// install();



// npm i @material-ui/styles --save

// const styles = theme => {
//   root: {
//     flexGrow: 1,
//   },
// }

// const useStyles = makeStyles(theme => (
//   {
//     root: {
//       display: 'flex',
//     },
//     paper: {
//       top: '24px' ,
//       color: 'red',
//       transformOrigin: '50px 50px',
//     },

//   }));
  
// const classes = useStyles();
// const [open, setOpen] = React.useState(false);
// const anchorEl = React.useRef(null);
const anchorReference = 'anchorEl';
const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5,
    },
    center: {
      top: 'calc(50% - 5px)',
    },
    bottom: {
      bottom: -5,
    },
  },
  anchorHorizontal: {
    left: {
      left: -5,
    },
    center: {
      left: 'calc(50% - 5px)',
    },
    right: {
      right: -5,
    }
  },
};

// const styles = makeStyles ({
//   buttonWrapper: {
//     position: 'relative',
//     // marginBottom: theme.spacing.unit * 4,
//     },
//   popover: {
//       background: '##03a9f4',
//     },
//   // anchor: {
//   //   backgroundColor: green[500],
//   //   width: 10,
//   //   height: 10,
//   //   borderRadius: '50%',
//   //   position: 'absolute',
//   // },
//   // radioAnchor: {
//   //   color: green[600],
//   //   '&$checked': {
//   //     color: green[500],
//   //   },
//   // },
//   // checked: {},
//   // typography: {
//   //   // margin: theme.spacing.unit * 2,
//   // },
// });


// export default function Toolbar() {
class Toolbar extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  state = {
    open: false,
    target: '',
  };




  handleOpen = () => {
    // setOpen(!open);
    // console.log('hndlOpen');
    this.setState({open: !this.state.open});
    // console.log(anchorEl.current.style.height);
  };

  handleClose = () => {

    // console.log('hndlCls');
    // this.setState({target: })
    this.setState({open: false});
    // return;

  };


	render(){
    // const { classes } = styles;
    let open = this.state.open;
    const [anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft] = ['bottom', 'left', 'top', 'left', 200, 400];
  return(
    <header> 
    <div>
      <AppBar className="toolbar-paper" sticky="top">
        <Grid container direction="row" justify="flex-end" style={{paddingRight: '50px'}} >
              <ToolbarLink to="/" name="MinePage" className="nav-link active">Главная</ToolbarLink>
              
              <ButtonBase
                buttonRef = {node => {
                  this.anchorEl = node;
                }}
                variant = "contained"
                onClick = {this.handleOpen}
              >
                <ToolbarLink to="#" name="services" className="nav-link" id="services">
                    Услуги
                    <i className="material-icons" style={{fontSize: '1.3em', color: '#777' }}>arrow_drop_down</i>
                </ToolbarLink>
              </ButtonBase>

              {anchorReference === 'anchorEl' && (
                <div
                  className=""
                  style={{
                    ...inlineStyles.anchorVertical[anchorOriginVertical],
                    ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],
                  }}
                />
              )}

              <Popover
                open={open}
                anchorEl={this.anchorEl}
                anchorReference={anchorReference}
                square={"true"}
                className={"popoverClassname"}
                id={"servicesClass"}
                anchorOrigin={{
                  vertical: anchorOriginVertical,
                  horizontal: anchorOriginHorizontal,
                }}
              >
                <Paper className="menuPaper">
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <ToolbarLink to="/text-preparing" name="services" className="nav-link " onClick={this.handleClose}>Обработка текстов</ToolbarLink>
                      <ToolbarLink to="/copywriting" name="services" className="nav-link " onClick={this.handleClose}>Копирайтинг</ToolbarLink>
                      <ToolbarLink to="/office-macro" name="services" className="nav-link " onClick={this.handleClose}>Автоматизация офиса </ToolbarLink>
                      <ToolbarLink to="/site-developing" name="services" className="nav-link " onClick={this.handleClose}>Разработка сайтов</ToolbarLink>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popover>
                                 

              <ToolbarLink to="/prices" name="prices" className="nav-link " >Цены</ToolbarLink>
              <ToolbarLink to="/contacts" name="contacts" className="nav-link ">Контакты</ToolbarLink>
        </Grid>
      </AppBar>
    </div>
    </header>	
	);
};
};


// 
              // <ClickAwayListener onClickAway={this.handleClose}>
// export default withStyles(styles)(Toolbar);
export default Toolbar;


// 
 // anchorPosition={{ top: positionTop, left: positionLeft }}
// 
                    // <Paper className={classes.paper}>
                    //   <ClickAwayListener onClickAway={handleClose}>
                    //     <MenuList>
                    //       <ToolbarLink to="/text-preparing" className="nav-link " onClick={handleClose}>Обработка текстов {placement}</ToolbarLink>
                    //       <ToolbarLink to="/copywriting" className="nav-link " onClick={handleClose}>Копирайтинг</ToolbarLink>
                    //       <ToolbarLink to="/office-macro" className="nav-link " onClick={handleClose}>Офисные макросы</ToolbarLink>
                    //       <ToolbarLink to="/site-developing" className="nav-link " onClick={handleClose}>Разработка сайтов</ToolbarLink>
                    //     </MenuList>
                    //   </ClickAwayListener>
                    // </Paper>


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