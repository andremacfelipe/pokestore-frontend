import React from "react";

const LogoutIcon = ({onClick}) => {
    return (
        <span className="material-symbols-rounded LogoutIcon notranslate" onClick={onClick ? onClick : null}>
            logout
        </span>
    )
}

export default LogoutIcon
