import AppRoutes from 'routes/appRoutes';
import { store } from 'store';
import { themeVariables } from 'effects/variables';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeVariables}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
