import React from "react";
import {
  ContainerRepository,
  ContainerTitle,
  Circle,
  Title,
  Content,
  Container,
  Number,
  Image,
  ContainerStar,
  StyledStarBorderIcon,
} from "./styled";
import padlock from "../../assets/cadeado.png";

const CardRepositories = ({ repo }) => {
  return (
    <ContainerRepository key={repo.id}>
      <ContainerTitle>
        <Circle />
        <Title>{repo.name}</Title>
      </ContainerTitle>
      <Content>{repo.description}</Content>
      <Container>
        <ContainerStar>
          <StyledStarBorderIcon fontSize="medium" />
          <Number>{repo.stargazers_count}</Number>
        </ContainerStar>
        <Image src={padlock} alt="Cadeados" />
      </Container>
    </ContainerRepository>
  );
};

export default CardRepositories;
