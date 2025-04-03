
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onChatClick: () => void;
}

const Hero = ({ onChatClick }: HeroProps) => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
        Smart Task Management with AI
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
        Let our intelligent assistant analyze your workload and suggest optimal task allocation 
        to maximize your productivity and minimize stress.
      </p>
      <Button 
        onClick={onChatClick}
        className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 rounded-full text-lg hero-cta shadow-lg flex items-center gap-2 transform transition-all hover:scale-105"
      >
        Chat with AI Assistant <ArrowRight className="h-5 w-5 ml-1" />
      </Button>
    </div>
  );
};

export default Hero;
