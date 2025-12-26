import 'src/global.css';

import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { usePathname } from 'src/routes/hooks';

import { ThemeProvider } from 'src/theme';
import { CONFIG } from 'src/global-config';
import { LocalizationProvider } from 'src/locales';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings } from 'src/components/settings';

import { CheckoutProvider } from 'src/sections/checkout/context';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export function App({ children }: AppProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <LocalizationProvider>
        <ThemeProvider>
          <MotionLazy>
            <Snackbar />
            <ProgressBar />
            <SettingsDrawer defaultSettings={defaultSettings} />
            <CheckoutProvider>{children}</CheckoutProvider>
          </MotionLazy>
        </ThemeProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}
