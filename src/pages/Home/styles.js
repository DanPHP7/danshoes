import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList``;

export const ItemList = styled.View`
  flex: 1;
  padding: 25px;
  flex-direction: column;

  background: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 60px;
  margin-right: 60px;
  border-radius: 5px;
`;

export const ImageItem = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ContainerFooter = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;
export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;
export const PriceOlder = styled.Text`
  text-decoration: line-through;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 0px;
  color: #999;
`;
export const Button = styled(RectButton)`
  background: #04d361;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  flex-direction: row;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 19px;
`;

export const IconContainer = styled.View`
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const CartCount = styled.Text`
  position: absolute;
  background: #da552f;
  width: 17px;
  height: 17px;
  top: 2px;
  right: 3px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
`;
