import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TopHeader = styled.View`
  padding: 0 20px;
  height: 56px;
  background-color: #009FE2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 6;
`;

export const CirclesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 25px;
`;
export const Circle = styled.View`
  margin: 10px;
  background-color: #009FE2;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const ContainerMiddle = styled.View`
  margin: 0 25px;
  height: 90px;
  background-color: white;
  elevation: 5;
`;
export const ContainerBottom = styled.View`
  background-color: white;
  border-radius: 6px;
  margin: 20px 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  elevation: 6;
`;