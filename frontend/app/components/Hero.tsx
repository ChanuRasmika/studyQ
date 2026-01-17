export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-start py-2 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <div>
          <div className="mb-0">
            <img 
              src="/hero-image.png" 
              alt="Modern student using digital tools for exam preparation" 
              className="w-full max-w-2xl mx-auto opacity-60"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-3 tracking-tight font-sans -mt-4">
            Smarter Question Practice.<br/><span className="text-black">Better Exam Results.</span>
          </h1>
          
          <p className="text-base lg:text-lg text-gray-700 font-medium mb-4 max-w-2xl mx-auto">
            Replace physical question books with a smart digital question system designed for today’s students and educators.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6 italic">
            <span>● Practice questions anytime, anywhere</span>
            <span>● Learn faster with instant answers</span>
            <span>● Track progress clearly</span>
          </div>

       

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              Sign Up Free
            </button>
            <button className="bg-blue-100 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-100 hover:text-black transition duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}