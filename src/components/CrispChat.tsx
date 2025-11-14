import { useEffect } from 'react';

const CRISP_WEBSITE_ID = 'd90158fc-9655-4701-a74e-55d5334baa4e';

const CrispChat: React.FC = () => {
  useEffect(() => {
    if (window.$crisp) {
      return;
    }

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      if (window.$crisp) {
        window.$crisp = undefined;
      }
    };
  }, []);

  return null;
};

export default CrispChat;
