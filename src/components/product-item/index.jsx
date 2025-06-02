import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

import { useDispatch, useSelector } from "react-redux"; 
import { newItem } from "../../redux/cart-products/slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(newItem(product))
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
