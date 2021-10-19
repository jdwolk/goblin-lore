import styled from '@emotion/styled';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Container = ({ children, scrollAxis, className }) => (
  <ParallaxProvider scrollAxis={scrollAxis}>
    <div className={scrollAxis}>
      <div className={className}>{children}</div>
    </div>
  </ParallaxProvider>
);

const StyledContainer = styled(Container)`
  height: 100%;
  width: 100%;
  min-height: 200vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;

  .parallax {
    background-color: red;
    width: 10rem;
    height: 10rem;
  }
`;

const Thingy = () => {
  return (
    <StyledContainer scrollAxis="vertical">
      <Parallax x={['-50%', '50%']} className="parallax">
        <h1>Hi</h1>
      </Parallax>
      <Parallax x={['50%', '-50%']} className="parallax">
        <h1>Hello</h1>
      </Parallax>
    </StyledContainer>
  );
};

const TheLore = () => {
  return (
    <>
      <h1>Goblin Lore</h1>
      <Thingy />
    </>
  );
};

export default TheLore;
