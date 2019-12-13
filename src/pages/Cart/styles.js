import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 5px;
  margin: 10px;
  background: #fff;
  border-radius: 5px;
`;

export const Products = styled.View`
  padding: 5px;

  background: #fff;

  margin: 10px;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: Arial Helvetica sans-serif;
`;
export const Price = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

export const FooterProduct = styled.View`
  min-width: 305px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 5px;
  padding: 5px;
`;
export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;
export const AmountPerProduct = styled.Text`
  width: 51px;
  height: 26px;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #eee;
  text-align: center;
`;
export const AddButton = styled(RectButton)`
  padding: 5px;
`;
export const SubButton = styled(RectButton)`
  padding: 5px;
`;
export const RemoveButton = styled(RectButton)``;

export const TotalPerProduct = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const InfoProduct = styled.View`
  width: 165px;
`;

export const FooterContainer = styled.View`
  align-items: center;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonFinalizar = styled(RectButton)`
  width: 360px;
  padding: 12px;
  border-radius: 4px;
  background: #04d361;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const TotalTitle = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial Helvetica sans-serif;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
