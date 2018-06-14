import React from "react";
import {
  Hidden,
  Button
} from "material-ui";


class Header extends React.Component {
    render(){
        return(
            <div>
                <Hidden mdUp>
                <p >Car2Go</p>
                </Hidden>
            </div>
        )
    }

}

export default Header;
