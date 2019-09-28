import * as React from "react";
import defaultLogo from "../../../res/img/placeholders/300x100-logo.png";

const Logo = props => {
    return <img src={defaultLogo} alt="Logo" {...props} />
};

export default Logo;