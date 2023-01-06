import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
<<<<<<< Updated upstream
// import { useStateValue } from "./StateProvider";
// import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
//   const [{ basket, user }, dispatch] = useStateValue();
=======
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
>>>>>>> Stashed changes

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
<<<<<<< Updated upstream
          {/* <h3>Hello, {user?.email}</h3> */}
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* {basket.map(item => (
=======
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
>>>>>>> Stashed changes
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
<<<<<<< Updated upstream
          ))} */}
=======
          ))}
>>>>>>> Stashed changes

        </div>
      </div>

      <div className="checkout__right">
<<<<<<< Updated upstream
        {<Subtotal />}
=======
        <Subtotal />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

<<<<<<< Updated upstream
export default Checkout;
=======
export default Checkout;
>>>>>>> Stashed changes
