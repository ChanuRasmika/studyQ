export default function Features() {
  const features = [
    {
      title: "AI Quiz Generation",
      description: "Upload notes and get instant quizzes tailored to your content",
      icon: "🎯"
    },
    {
      title: "Smart Flashcards",
      description: "Automatically create flashcards from your study materials",
      icon: "📚"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics",
      icon: "📊"
    },
    {
      title: "Adaptive Learning",
      description: "AI adjusts difficulty based on your performance",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Everything You Need to Excel
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-600 hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
