// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CartItem from "../cart-item/index"

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cart);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(item => {
          return <CartItem key={item.name} product={item} />
        })}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
