const ItemOverlayForm = ({children}) => {
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            {children}
        </form>
    )
}

export {ItemOverlayForm}