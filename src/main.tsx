import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import { App } from './app';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';
import { SettingsProvider, defaultSettings } from './components/settings';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <SettingsProvider defaultSettings={defaultSettings}>
      <RouterProvider router={router} />
    </SettingsProvider>
  </StrictMode>
);
