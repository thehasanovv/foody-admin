import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { ToggleThemeMod } from "./components/ToggleThemeMod";
import Layout from "./components/Layout";
import { themeProv } from "./styles/theme";
function App() {
  const [theme, toggleTheme] = useDarkMode();
  let themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeProvider theme={themeProv}>
        <ToggleThemeMod theme={theme} toggleTheme={toggleTheme} />
        <Layout>
          <GlobalStyles />
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  );
}
export default App;
