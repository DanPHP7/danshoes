import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/formatPrice';
import {
  Container,
  Products,
  ProductImage,
  InfoContainer,
  Title,
  Price,
  FooterProduct,
  AmountPerProduct,
  TotalPerProduct,
  ActionsContainer,
  AddButton,
  SubButton,
  RemoveButton,
  InfoProduct,
  FooterContainer,
  TotalPrice,
  ButtonFinalizar,
  TotalTitle,
  TextButton,
  EmptyCart,
  TextEmpty,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (totalSum, product) => totalSum + product.price * product.amount,
        0
      )
    )
  );
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );
  const dispatch = useDispatch();
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      {products.length ? (
        <>
          {products.map(product => (
            <Products key={product.id}>
              <InfoContainer>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <InfoProduct>
                  <Title>{product.title}</Title>
                  <Price>{product.priceFormatted}</Price>
                </InfoProduct>

                <RemoveButton
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <Icon name="delete-forever" size={24} color="#f00" />
                </RemoveButton>
              </InfoContainer>

              <FooterProduct>
                <ActionsContainer>
                  <SubButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#04d361"
                    />
                  </SubButton>

                  <AmountPerProduct>{product.amount}</AmountPerProduct>
                  <AddButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#04d361" />
                  </AddButton>
                </ActionsContainer>

                <TotalPerProduct>{product.subtotal}</TotalPerProduct>
              </FooterProduct>
            </Products>
          ))}
          <FooterContainer>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalPrice>{total}</TotalPrice>
            <ButtonFinalizar>
              <TextButton>FINALIZAR PEDIDO</TextButton>
            </ButtonFinalizar>
          </FooterContainer>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <TextEmpty>Carrinho Vazio.</TextEmpty>
        </EmptyCart>
      )}
    </Container>
  );
}
