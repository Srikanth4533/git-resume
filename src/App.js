import { Container } from "App.css";
import { GlobalStyles } from "App.styles";
import { Search } from "components";
import { Home, Profile, Results } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
        <Search />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
