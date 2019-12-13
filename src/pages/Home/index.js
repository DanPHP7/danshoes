import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';

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

export default class Home extends Component {
  state = {
    dados: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
      priceOlderFormated: formatPrice(product.oldPrice),
    }));
    this.setState({
      dados: data,
    });
  }

  render() {
    const { dados } = this.state;

    return (
      <Container>
        <List
          data={dados}
          keyExtractor={dado => String(dado.id)}
          renderItem={({ item }) => (
            <ItemList>
              <ImageItem source={{ uri: item.image }} />

              <Title>{item.title}</Title>
              <PriceOlder>{item.priceOlderFormated}</PriceOlder>
              <Price>{item.priceFormated}</Price>
              <Button>
                <IconContainer>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <CartCount>3</CartCount>
                </IconContainer>
                <ButtonTitle>ADICIONAR</ButtonTitle>
              </Button>
            </ItemList>
          )}
        />
      </Container>
    );
  }
}
