import { Container } from "../components/GlobalStyles/GlobalStyles";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Home } from "../pages/Home/Home";

export const Public = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </>
  );
};
