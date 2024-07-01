import { AppContainer, CardHead, Container } from "./App.styled.js";
import Cards from "./components/Cards";

function App() {
  return (
    <Container>
      <AppContainer>
        <CardHead>Deck Of Cards </CardHead>
      </AppContainer>
      <Cards />
    </Container>
  );
}

export default App;
