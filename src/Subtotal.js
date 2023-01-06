import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
<<<<<<< Updated upstream
import { useStateValue } from "./StateProvider"
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
    const [{ basket }] = useStateValue();
//   const history = useHistory();
//   const [{ basket }] = useStateValue();
=======
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
>>>>>>> Stashed changes

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
<<<<<<< Updated upstream
              Subtotal ({basket?.length} items): <strong>{0}</strong>
=======
              Subtotal ({basket.length} items): <strong>{value}</strong>
>>>>>>> Stashed changes
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
<<<<<<< Updated upstream
        value={0} // Part of the homework
=======
        value={getBasketTotal(basket)} // Part of the homework
>>>>>>> Stashed changes
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

<<<<<<< Updated upstream
      <button>Proceed to Checkout</button>
=======
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
>>>>>>> Stashed changes
    </div>
  );
}

<<<<<<< Updated upstream
export default Subtotal;
=======
export default Subtotal;
>>>>>>> Stashed changes
