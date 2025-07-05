import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

import * as CookieConsent from 'vanilla-cookieconsent';
import ConsentModal from './components/ConsentModal';

function App() {
  useEffect(() => {
    CookieConsent.run({
      mode: 'opt-in',
      disablePageInteraction: true,
      autoShow: false,
      language: {
        default: 'en',
      },
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
        },
        marketing: {
          enabled: false,
          readOnly: false,
        },
      },
    });
  }, []);

  return <ConsentModal />;
}

export default App;
