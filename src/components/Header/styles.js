import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  max-height: 50px;
  margin-bottom: 10px;
`;

export const LogoImage = styled.Image``;

export const RedirectHome = styled(RectButton)`
  height: 40px;
`;
export const RedirectCart = styled(RectButton)`
  height: 40px;
`;

export const CartCount = styled.Text`
  width: 17px;
  height: 17px;
  border-radius: 10px;
  top: -3px;
  right: -5px;
  color: #fff;
  background: #da552f;
  text-align: center;
  position: absolute;
`;
