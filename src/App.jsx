import { useContext } from "react";
import { TokentContext } from "./context/TokenContext";
import { Private } from "./apps/Private";
import { Public } from "./apps/Public";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";

function App() {
  const { token } = useContext(TokentContext);
  return (
    <div className="App">
      <GlobalStyle />
      {token ? <Private /> : <Public />}
    </div>
  );
}

export default App;
