import { useState } from "react";
import Cart from "../cart/index";
import * as Styles from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsCount } from "../../redux/cart-products/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // Quero currentUser pegar do userReducer
  const { currentUser } = useSelector(rootReducer => rootReducer.user);

  // Importando o SELECTOR
  const productsCount = useSelector(selectProductsCount);

  // Faz o dispatch no userReducer (é uma action!)
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Hudson", email: "hudson@email.com" }));
  }

  // Faz o dispatch no userReducer (é uma action!)
  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser 
          ? <div onClick={handleLogoutClick}>Sair</div> 
          : <div onClick={handleLoginClick}>Login</div> 
        }
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
