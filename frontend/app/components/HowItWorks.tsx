export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Upload Your Materials", description: "Add notes, PDFs, or textbooks" },
    { step: "2", title: "AI Processes Content", description: "Our AI analyzes and structures your content" },
    { step: "3", title: "Start Learning", description: "Practice with quizzes and flashcards" },
    { step: "4", title: "Track Progress", description: "See your improvement over time" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
