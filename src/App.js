import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { themeProv } from "./styles/theme";
import Layout from "./components/Layout";
import Routlar from "./components/Routes";
// import { ToggleThemeMod } from "./components/ToggleThemeMod";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  let themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeProvider theme={themeProv}>
        {/* <ToggleThemeMod theme={theme} toggleTheme={toggleTheme} /> */}
        <Layout>
          <GlobalStyles />
          <Routlar />
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  );
}
export default App;
