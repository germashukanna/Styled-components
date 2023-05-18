import React from 'react';
import image from './assets/image/Rectangle 1.svg'
import styled from "styled-components";
import {Title} from "./components/Title.styled";
import {Description} from "./components/Description.styled";
import {SuperButton} from "./components/Button.styled";


function App() {
    return (
        <Container>
            <Box>
                <Image src={image}/>
                <Wrapper>
                    <Title>Headline</Title>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</Description>
                    <SuperButton backgroundColor={'#4E71FE'} color={'#fff'}>See more</SuperButton>
                    <SuperButton border={'2px solid #4E71FE'}>Save</SuperButton>
                </Wrapper>
            </Box>
        </Container>
    );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 10px 20px;
`;

const Wrapper = styled.div`
  padding: 10px 10px 20px;
`;


export const Image = styled.img`
  object-fit: cover;

`


