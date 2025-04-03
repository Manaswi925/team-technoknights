
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    botpressWebChat: {
      init: (config: any) => void;
      sendEvent: (event: { type: string }) => void;
    };
  }
}

interface ChatWidgetProps {
  chatRef: React.RefObject<{ openChat: () => void }>;
}

const ChatWidget = ({ chatRef }: ChatWidgetProps) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Create webchat container
    const webchatContainer = document.createElement('div');
    webchatContainer.id = 'webchat';
    webchatContainer.style.position = 'fixed';
    webchatContainer.style.bottom = '20px';
    webchatContainer.style.right = '20px';
    webchatContainer.style.width = '360px';
    webchatContainer.style.height = '540px';
    webchatContainer.style.zIndex = '1000';
    webchatContainer.style.borderRadius = '12px';
    webchatContainer.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.2)';
    webchatContainer.style.overflow = 'hidden';
    webchatContainer.style.display = 'none';

    document.body.appendChild(webchatContainer);

    // Load Botpress scripts
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.3/inject.js';
    document.body.appendChild(injectScript);

    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://files.bpcontent.cloud/2025/04/03/13/20250403133953-P8PDZ7L2.js';
    document.body.appendChild(botpressScript);

    // Initialize Botpress webchat after scripts are loaded
    injectScript.onload = () => {
      if (window.botpressWebChat && !initialized.current) {
        initialized.current = true;
        
        window.botpressWebChat.init({
          "botId": "e7229211-adb4-4d48-be14-57a9614ba51e",
          "hostUrl": "https://cdn.botpress.cloud/webchat",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "your-client-id",
          "webhookId": "your-webhook-id",
          "botName": "AllocAI",
          "avatarUrl": "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/62a3e0d7-5f9e-4a4e-8922-442c68c4d7/v65214/style.css",
          "lazySocket": true,
          "themeName": "prism",
          "frontendVersion": "v2",
          "showPoweredBy": false,
          "enableConversationDeletion": true
        });

        // Expose the openChat method
        if (chatRef.current) {
          chatRef.current.openChat = () => {
            const webchatElement = document.getElementById('webchat');
            if (webchatElement) {
              webchatElement.style.display = 'block';
            }
            window.botpressWebChat.sendEvent({ type: 'show' });
          };
        }
        
        // Configure chat link to open chat
        const chatLink = document.getElementById('chat-link');
        if (chatLink) {
          chatLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (chatRef.current) {
              chatRef.current.openChat();
            }
          });
        }
      }
    };

    return () => {
      // Clean up
      document.body.removeChild(webchatContainer);
      if (injectScript.parentNode) {
        document.body.removeChild(injectScript);
      }
      if (botpressScript.parentNode) {
        document.body.removeChild(botpressScript);
      }
    };
  }, [chatRef]);

  return null; // This component doesn't render any UI directly
};

export default ChatWidget;
