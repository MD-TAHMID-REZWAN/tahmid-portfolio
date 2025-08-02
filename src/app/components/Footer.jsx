import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MD TAHMID REZWAN
            </h2>
            <p className="mt-2 text-gray-400">Network & Security Specialist</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/MD-TAHMID-REZWAN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-tahmid-rezwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://codeforces.com/profile/MostaqueNaimAIUB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaCode size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MD TAHMID REZWAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}