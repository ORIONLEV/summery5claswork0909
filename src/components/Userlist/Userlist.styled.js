import styled from "styled-components";

export const Container = styled.ul`
  width: 1085px;
  height: auto;
  background-color: lightblue;
  display: flex;
  flex-wrap: wrap; 

   gap: 10px;
  list-style: none;
`;


export const Item = styled.li`

  margin-top: 20px;
margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  text-align: left;

  background-color: #fae3d1;
  border: 2px solid #ff9436;
  border-radius: 6px;
  padding: 15px;
  width: 240px; 

  box-sizing: border-box;
`;


export const InfoBlock = styled.ul`
margin: 0;
padding: 0;

width: auto;
height: auto;
display: flex;
flex-direction: column;
  text-align: left;

`;

export const Subtitle = styled.h2`
margin: 0;
padding: 0;


  font-size: 15px;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
`;

export const InfoText = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
  font-size: 13px;
  color: #333333;
line-height: 1.4;
`;