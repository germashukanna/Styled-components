import styled from "styled-components";


type SuperButtonTypeProps = {
    backgroundColor?: string
    border?: string
    color?: string
}

export const SuperButton = styled.button<SuperButtonTypeProps>`
  width: 86px;
  height: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 5px;
  margin-right: 12px;
  background-color: ${props => props.backgroundColor || '#F5F5F5'};
  border: ${props => props.border || 'none'};
  color: ${props => props.color || '#4E71FE'};
  cursor: pointer;
`