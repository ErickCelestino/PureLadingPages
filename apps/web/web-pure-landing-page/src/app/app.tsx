import { AppThemeProvider } from '@pure-lading-pages/feature';
import { AppRouters } from './routes';

export function App() {
  return (
    <AppThemeProvider>
      <Content />
    </AppThemeProvider>
  );
}
//AA111
const Content = () => {
  return <AppRouters />;
};

export default App;
