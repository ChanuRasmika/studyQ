export default function BuiltFor() {
  return (
    <section className="py-8 md:py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-left">
                Built for Students
              </h2>
            </div>

            <div className="space-y-10">
              <div className="border-l-4 border-gray-800 pl-5 md:pl-7 py-1">
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-800">
                  "Whether you're in Grade 9, 10, 11 or a medical student preparing for exams,
                  studyQ is designed to be your most powerful study companion."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                  <p>studyQ helps you:</p>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-start gap-3">
                      <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                      <span>Practice more questions at a much lower cost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                      <span>Learn at your own pace, whenever you want</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                      <span>Stop wasting money on multiple expensive books</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                      <span>Prepare confidently with real exam-style questions</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img src="/builtforStudent.jpg" alt="Built for Students" className="h-60 w-full object-cover rounded-xl" />
                  <div className="absolute bottom-4 right-4">
                    <p className="text-lg md:text-xl font-bold italic text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                      Study smarter, not longer.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-left">
              Built for Teachers
            </h2>
          </div>

          <div className="space-y-10">
            <div className="border-l-4 border-gray-800 pl-5 md:pl-7 py-1">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-800">
                "Your knowledge becomes a scalable digital asset"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p>studyQ empowers teachers to:</p>
                <ul className="space-y-4 pl-2">
                  <li className="flex items-start gap-3">
                    <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                    <span>Earn extra income by contributing quality questions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                    <span>Reach more students digitally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                    <span>Use analytics to understand student performance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-4xl leading-none -mt-2 text-gray-700">•</span>
                    <span>Teach effectively without increasing workload.</span>
                  </li>
                </ul>
              </div>
              <div>
                <img src="/builtforTeachers.jpg" alt="Built for Teachers" className="h-60 w-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}