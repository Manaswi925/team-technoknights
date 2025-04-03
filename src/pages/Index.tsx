
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  const chatRef = useRef<{ openChat: () => void }>({
    openChat: () => console.log('Chat not initialized yet')
  });

  const handleChatClick = () => {
    if (chatRef.current) {
      chatRef.current.openChat();
    }
  };

  // Script for smooth scrolling
  const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#' && this.getAttribute('href') !== '#chat') {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }
      });
    });
  };

  // Set up smooth scrolling after component mount
  setTimeout(setupSmoothScroll, 500);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient shadow-md">
        <Navbar />
        <Hero onChatClick={handleChatClick} />
      </header>

      <main>
        <Features />
        <HowItWorks />
      </main>

      <Footer />
      
      <ChatWidget chatRef={chatRef} />
    </div>
  );
};

export default Index;
