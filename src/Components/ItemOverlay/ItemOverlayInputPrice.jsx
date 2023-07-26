const ItemOverlayInputPrice = ({onChange}) => {
    return (
        <input type="number" placeholder="$0.00" onChange={onChange ? onChange : () => {}}/>
    )
}

export {ItemOverlayInputPrice}