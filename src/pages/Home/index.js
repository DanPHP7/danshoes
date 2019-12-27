import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  List,
  ItemList,
  ImageItem,
  Button,
  Title,
  Price,
  ButtonTitle,
  IconContainer,
  CartCount,
  PriceOlder,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
        priceOlderFormated: formatPrice(product.oldPrice),
      }));
      setProducts(data);
    }
    loadProducts();
  }, [products]);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ItemList>
            <ImageItem source={{ uri: item.image }} />

            <Title>{item.title}</Title>
            <PriceOlder>{item.priceOlderFormated}</PriceOlder>
            <Price>{item.priceFormated}</Price>
            <Button onPress={() => handleAddToCart(item.id)}>
              <IconContainer>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <CartCount>{amount[item.id] || 0}</CartCount>
              </IconContainer>
              <ButtonTitle>ADICIONAR</ButtonTitle>
            </Button>
          </ItemList>
        )}
      />
    </Container>
  );
}
