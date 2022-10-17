import styled from "styled-components";
import { Container, ModalProps } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";

const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 80vh;
    background-image: url("https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
    background-size: cover;
    background-position: center;
`;

const HeaderContainer = styled.div`
    background-color: rgb(5, 148, 112);
    padding: 3rem;
    color: white;
    width: 26rem;
`;
const Heading = styled.h1`
    font-size: 4rem;
`;
const SubHeading = styled.h3`
    margin: 1rem 0;
    font-weight: 400;
`;

const Hero = ({}: ModalProps) => {
    return (
        <HeroComponent>
            <Container>
                <HeaderContainer>
                    <Heading>Feed you mind with the best</Heading>
                    <SubHeading>
                        Grow, learn and become more successful by reading some
                        of the top articles
                    </SubHeading>
                    <ModalComponent text="Signup" variant="danger" isSignupFlow={true}/>
                    <ModalComponent text="Login" variant="primary" isSignupFlow={false}/>
                </HeaderContainer>
            </Container>
        </HeroComponent>
    );
};

export default Hero;
