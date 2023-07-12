import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MainContainerCard from "./components/Layouts/MainContainerCardStyles";
import LayoutsStyles from "./components/Layouts/LayoutsStyles";

function App() {
  return (
    <MainContainerCard>
      <LayoutsStyles>
        <Header />
      </LayoutsStyles>

      <Main />

      <LayoutsStyles>
        <Footer />
      </LayoutsStyles>
    </MainContainerCard>
  );
}

export default App;
