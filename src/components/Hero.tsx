
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onChatClick: () => void;
}

const Hero = ({ onChatClick }: HeroProps) => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in relative z-10">
        Smart Task Management with AI
      </h1>
      
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Let our intelligent assistant analyze your workload and suggest optimal task allocation 
        to maximize your productivity and minimize stress.
      </p>
      
      <div className="relative z-10 inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Button 
          onClick={onChatClick}
          className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 rounded-full text-lg hero-cta shadow-xl flex items-center gap-2 transform transition-all hover:scale-105 relative overflow-hidden group"
          aria-label="Open chat with AI assistant"
        >
          <span className="relative z-10 flex items-center">
            Chat with AI Assistant <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300 opacity-70"></span>
          <Sparkles className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
      
      {/* Badges below CTA */}
      <div className="flex justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm flex items-center border border-white/5">
          <span className="bg-accent/20 p-1 rounded-full mr-2">
            <Sparkles className="h-3 w-3 text-accent" />
          </span>
          AI-Powered Analysis
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm flex items-center border border-white/5">
          <span className="bg-accent/20 p-1 rounded-full mr-2">
            <Sparkles className="h-3 w-3 text-accent" />
          </span>
          Intelligent Assistance
        </div>
      </div>
    </div>
  );
};

export default Hero;
