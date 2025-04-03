
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Start the Conversation",
      description: "Click the chat button to begin interacting with our AI assistant."
    },
    {
      number: 2,
      title: "Describe Your Tasks",
      description: "Tell the AI about your current workload, deadlines, and preferences."
    },
    {
      number: 3,
      title: "Get Recommendations",
      description: "Receive personalized task allocation suggestions tailored just for you."
    },
    {
      number: 4,
      title: "Boost Productivity",
      description: "Implement the suggestions and watch your efficiency improve."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#f5f7ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with AI-powered task management is simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-primary/30"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
