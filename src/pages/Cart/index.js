import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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

                <RemoveButton onPress={() => removeFromCart(product.id)}>
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
