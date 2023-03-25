import React,{createContext,} from "react";

import useWindowSize from "../../hooks/Layout/useWindowSize";

const LayoutContext = createContext({})

export const LayoutProvider = ({children}) => {

    const {width} = useWindowSize() 

    const isMobile = width < 900 ? true : false
    
    
    return (
        <LayoutContext.Provider
            value={{isMobile}}
        >
            {children}

        </LayoutContext.Provider>
    )


}


export default LayoutContext

