// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CartItem from "../cart-item/index"
import { selectTotalPriceOnCart } from "../../redux/cart-products/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cart);
  const totalPriceOnCart = useSelector(selectTotalPriceOnCart)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(item => {
          return <CartItem key={item.name} product={item} />
        })}

        <Styles.CartTotal>R$ {totalPriceOnCart}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
