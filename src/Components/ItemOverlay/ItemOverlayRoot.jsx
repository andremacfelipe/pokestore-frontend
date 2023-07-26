import "./style.css";
import HideModal from "../HideModal/HideModal";



const ItemOverlayRoot = ({ showOverlay,onOverlayClick,children }) => {

    return (
        <>
            <HideModal 
            showContent={showOverlay}
            onClick={onOverlayClick}

        />
            <div className="ItemOverlayRoot">
                {children}
            </div>
        </>
        
    )
}

export { ItemOverlayRoot }