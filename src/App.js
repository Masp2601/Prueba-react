import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeProvider';

import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
