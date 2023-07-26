const PurchaseInfo = ({totalPrice}) => {
    return (
        <section className="PurchaseInfo">
            <div className="total">
                Total:{totalPrice}
            </div>
        </section>
    )
}

export {PurchaseInfo}
