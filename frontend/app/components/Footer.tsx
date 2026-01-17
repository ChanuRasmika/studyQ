export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">studyQ</h3>
            <p className="text-sm">AI-powered learning for everyone</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 studyQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
