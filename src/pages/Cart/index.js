import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <InfoContainer>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <InfoProduct>
            <Title>Titulo</Title>
            <Price>R$ 179,90</Price>
          </InfoProduct>

          <RemoveButton>
            <Icon name="delete-forever" size={24} color="#f00" />
          </RemoveButton>
        </InfoContainer>
        <FooterProduct>
          <ActionsContainer>
            <SubButton>
              <Icon name="remove-circle-outline" size={20} color="#04d361" />
            </SubButton>

            <AmountPerProduct>3</AmountPerProduct>
            <AddButton>
              <Icon name="add-circle-outline" size={20} color="#04d361" />
            </AddButton>
          </ActionsContainer>

          <TotalPerProduct>R$539, 70</TotalPerProduct>
        </FooterProduct>
      </Products>

      <FooterContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalPrice>R$1619,10</TotalPrice>
        <ButtonFinalizar>
          <TextButton>FINALIZAR PEDIDO</TextButton>
        </ButtonFinalizar>
      </FooterContainer>
    </Container>
  );
}
