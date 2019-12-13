import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
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

class Home extends Component {
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

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { dados } = this.state;
    const { amount } = this.props;
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
              <Button onPress={() => this.handleAddToCart(item.id)}>
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
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
