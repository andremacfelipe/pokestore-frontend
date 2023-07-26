import LoadingSpin from "../LoadingSpin/LoadingSpin"
import { useNavigate } from "react-router-dom"

const PaymentInfo = ({ PaymentMethod, currentUser, action }) => {

    const navigate = useNavigate()

    return (
        <section className="PaymentInfo">
            <h3>Payment Method:
                <span className="PaymentMethod">{" My wallet "}</span>
                <span className="currentCredits">
                    ($ {currentUser?.userCredits?.toFixed(2) || Number(0).toFixed(2)})
                </span>
            </h3>
            <h3>Account: {currentUser?.username}</h3>
            {
                action.completed ? <button
                    onClick={() => navigate(`/profile/${currentUser?.userId}/inventory`)}
                >
                    See in inventory
                </button>
                    :
                <button
                    onClick={action?.onClick}
                >
                    {action.loading ? <LoadingSpin /> : action.name}
                </button>
            }
        </section>
    )
}

export { PaymentInfo }