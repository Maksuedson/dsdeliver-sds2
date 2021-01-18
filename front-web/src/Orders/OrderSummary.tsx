import { formatPrice } from "./helpers"

type Props = {
    amount: number;
    totalprice: number;
    onSubmit: () => void;
}

function OrderSummary({amount, totalprice, onSubmit}: Props){
    return(
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="amoutnt-selected">{formatPrice(totalprice)} </strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button className="order-summary-make-order"
                onClick={onSubmit}
                >
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    )
}

export default OrderSummary