import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { ToggleThemeMod } from "./components/ToggleThemeMod";
import Layout from "./components/Layout";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <ToggleThemeMod theme={theme} toggleTheme={toggleTheme} />
      <Layout>
        <GlobalStyles />
      </Layout>
    </ThemeProvider>
  );
}
export default App;
