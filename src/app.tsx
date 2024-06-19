import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/theme';
import Root from './components/root';

const appRoot = document.createElement("div");
document.body.appendChild(appRoot);
const root = createRoot(appRoot);
root.render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
