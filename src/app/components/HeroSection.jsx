'use client';

import { FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Animated typing GIF */}
      <div className="flex justify-center">
        <img
          src="https://readme-typing-svg.herokuapp.com?lines=Hi,+there+👋+,+I'm+MD+TAHMID+REZWAN!+😀"
          alt="Typing animation"
        />
      </div>

      {/* Role Title */}
      <h3 className="text-2xl font-semibold text-center mt-4">
        A Dedicated Network Specialist
      </h3>

      {/* Networking GIF on the Right */}
      <div className="flex justify-center my-6">
        <img
          src="https://newsroom.cisco.com/c/dam/r/newsroom/en/us/migrated-assets/cio-wroundtable-wrap-up-feature_800x450_thumb_040621-gif-2152474-1-0.gif"
          alt="Networking GIF"
          className="max-w-[490px] w-full"
        />
      </div>

      {/* About Section */}
      <div className="text-md text-gray-900 space-y-2 max-w-4xl">
        <p>🔭 I’m pursuing <strong>MSc</strong> in Computer Network Administration and Management at University of Portsmouth-United Kingdom</p>
        <p>🎓 I’m a graduate from American International University-Bangladesh</p>
        <p>🌱 I’m currently learning & exploring: <strong>CCNA,CCNP, CyberSecurity, WebHack, Digital Forensic</strong></p>
        <p>👯 I’m looking to collaborate with the <strong>IT industry</strong></p>
        <p>📫 How to reach me: <a href="mailto:mdtahmidrezwan@gmail.com" className="text-blue-600 underline">mdtahmidrezwan@gmail.com</a></p>
      </div>

      {/* Social Links */}
      <h3 className="text-xl font-semibold mt-8">Connect with me:</h3>
      <div className="flex items-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/md-tahmid-rezwan-b93516208/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

      {/* Extra Image */}
      {/* <div className="flex mt-6">
        <img
          src="https://i.ytimg.com/vi/M3Lx_oE_n04/maxresdefault.jpg"
          alt="Learning preview"
          className="max-w-[490px] w-full"
        />
      </div> */}

      {/* Skills Icons */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Languages and Tools:</h3>
      <div className="flex flex-wrap gap-4">
        {[
          { name: 'C', url: 'https://www.cprogramming.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
          { name: 'C++', url: 'https://www.w3schools.com/cpp/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
          { name: '.NET', url: 'https://dotnet.microsoft.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg' },
          { name: 'Figma', url: 'https://www.figma.com/', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
          { name: 'Illustrator', url: 'https://www.adobe.com/in/products/illustrator.html', icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg' },
          { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
          { name: 'Linux', url: 'https://www.linux.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
          { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
          { name: 'PHP', url: 'https://www.php.net', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
          { name: 'Python', url: 'https://www.python.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        ].map(({ name, url, icon }) => (
          <a key={name} href={url} target="_blank" rel="noreferrer">
            <img src={icon} alt={name} width="40" height="40" title={name} />
          </a>
        ))}
      </div>
    </div>
  );
}
