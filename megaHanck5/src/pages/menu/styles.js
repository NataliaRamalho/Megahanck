import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin: 60px 0 20px;
`;

export const Balance = styled.View`
  margin: 0 30px 15px;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  background: #793CFF;
`;

export const FoodCard = styled.View`
  align-items: center;
  flex-direction: row;
  background: #292E3C;
  border-radius: 12px;
  margin: 10px 25px;
  height: 120px;
`;

export const FoodImage = styled.Image`
  margin: 0 20px 0 15px; 
  width: 80px;
  height: 80px;
  border-radius: 40px;  
`;
export const FoodPrice = styled.Text`
  padding: 5px 8px;
  text-align: center;
  color: #FFF;
  margin: 6px 0 0;
  border-radius: 4px;
  background: #443180;
`;