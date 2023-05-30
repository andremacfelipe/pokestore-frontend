import React,{createContext, useEffect, useState} from "react";

import useWindowSize from "../../hooks/Layout/useWindowSize";

const LayoutContext = createContext({})

export const LayoutProvider = ({children}) => {

    const {width} = useWindowSize() 

    const isMobile = width < 900 ? true : false
    
    const [showSideMenu, setShowSideMenu] = useState(false)
    const hideSideMenu = () => {
        return setShowSideMenu(prev => !prev)
    }

    return (
        <LayoutContext.Provider
            value={{
                isMobile,
                showSideMenu,
                setShowSideMenu,
                hideSideMenu
            }}
        >
            {children}

        </LayoutContext.Provider>
    )


}


export default LayoutContext

