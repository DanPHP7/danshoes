import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/images/logo.png';
import {
  Container,
  LogoImage,
  RedirectHome,
  RedirectCart,
  CartCount,
} from './styles';

export default function Header() {
  return (
    <Container>
      <RedirectHome>
        <LogoImage source={Logo} />
      </RedirectHome>
      <RedirectCart>
        <Icon name="shopping-basket" size={25} color="#FFF" />
        <CartCount>3</CartCount>
      </RedirectCart>
    </Container>
  );
}
