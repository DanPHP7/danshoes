import React from 'react';
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

export default function Header({ navigation }) {
  const { navigate } = navigation;
  return (
    <Container>
      <RedirectHome onPress={() => navigate('Home')}>
        <LogoImage source={Logo} resizeMode="cover" />
      </RedirectHome>
      <RedirectCart onPress={() => navigate('Cart')}>
        <Icon name="shopping-basket" size={35} color="#FFF" />
        <CartCount>3</CartCount>
      </RedirectCart>
    </Container>
  );
}
Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
