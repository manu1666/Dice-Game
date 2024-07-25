import styled from "styled-components";

export const Button = styled.button `
  background-color: black;
  color: white;
  padding: 10px, 18px, 10px, 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 220px;
  height: 44px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`

  border: 1px solid black;
  background-color: white;
  color: black;


  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    
  }
  
  
`;