import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  height: 50px;
`;

export const LogoImage = styled.Image`
  height: 35;
`;

export const RedirectHome = styled(RectButton)``;
export const RedirectCart = styled(RectButton)`
  align-items: center;
`;

export const CartCount = styled.Text`
  width: 17px;
  height: 17px;
  border-radius: 10px;
  top: -8px;
  color: #fff;
  background: #04d361;
  text-align: center;
`;
