import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Bux/Bux";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <span className={classes.Close_SideDrawer} onClick={props.closed}>
          &times;
        </span>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems
            isAuthenticated={props.isAuth}
            close={props.closed}
          />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
