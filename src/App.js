import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import { ToggleThemeMod } from './components/ToggleThemeMod';
import Layout from './components/Layout';
import { themeProv } from './styles/theme';
import Routlar from './components/Routes';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  let themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeProvider theme={themeProv}>
        <ToggleThemeMod theme={theme} toggleTheme={toggleTheme} />
        <Layout>
          <GlobalStyles />
          <Routlar />
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  );
}
export default App;
