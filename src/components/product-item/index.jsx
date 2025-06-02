import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

import { useDispatch, useSelector } from "react-redux"; 
import { NewItem } from "../../redux/cart-products/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(rootReducer => rootReducer.cart);

  function addProductToCart() {
    // const item = products.find(item => item.name === product.name);
    
    // if(item) {
    //   item.quantity += 1;
    // } else {
      dispatch(NewItem(product))
    // }
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} handleClick={() => addProductToCart()}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
