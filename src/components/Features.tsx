
import { Brain, ListChecks, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Intelligent Analysis",
      description: "Our AI understands your work patterns and preferences to suggest the most effective task allocation."
    },
    {
      icon: <ListChecks className="h-12 w-12 text-primary" />,
      title: "Priority Sorting",
      description: "Automatically categorizes tasks by urgency and importance so you focus on what matters most."
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: "Performance Tracking",
      description: "Monitor your productivity trends and get insights to improve your workflow over time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered task allocation system helps you work smarter, not harder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border border-gray-100 shadow-md">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
