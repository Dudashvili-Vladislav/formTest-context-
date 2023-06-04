import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import App from './app/App';
import { AppContextProvider } from './shared/contexts/app-contexts';
// import './shared/config/i18n/i18n';

import 'app/styles/index.scss';



render(
    <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <AppContextProvider>
                        <App />
                    </AppContextProvider>
                </ThemeProvider>
            </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);