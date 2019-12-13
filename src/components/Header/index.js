import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.png';
import {
  Container,
  LogoImage,
  RedirectHome,
  RedirectCart,
  CartCount,
} from './styles';

function Header({ navigation, cartSize }) {
  const { navigate } = navigation;
  return (
    <Container>
      <RedirectHome onPress={() => navigate('Home')}>
        <LogoImage source={Logo} resizeMode="cover" />
      </RedirectHome>
      <RedirectCart onPress={() => navigate('Cart')}>
        <Icon name="shopping-basket" size={35} color="#FFF" />
        <CartCount>{cartSize || 0}</CartCount>
      </RedirectCart>
    </Container>
  );
}
Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
