import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-shadow">
            <Image
              src="/images/thesis-day-formal-jpg.jpg" 
              alt="MD TAHMID REZWAN"
              fill
              className="object-cover hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          
          <p className="text-lg text-gray-700">
  I'm MD TAHMID REZWAN, a passionate and goal-driven individual CyberOps Associate || Network Engineer || CCNA || IT Management.
</p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-black mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-black">Network Support Engineer Intern</h4>
                  <p className="text-gray-600">Sammtech Ltd | Sept 2023 - Jan 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-black">General Manager (Management)</h4>
                  <p className="text-gray-600">HoneyComb Inc. | Feb 2024 - Aug 2025</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-black mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">BSc in CSE</h4>
                  <p className="text-gray-600">American International University - Bangladesh</p>
                  <p className="text-gray-600">CGPA: 3.61 | Jan 2020 - Dec 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Skills Section */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  viewport={{ once: true }}
  className="pt-6 space-y-8"
>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>

  {/* Technical Skills (Networking Focused) */}
  <div>
    <h4 className="text-xl font-semibold text-gray-700 mb-2">🔧 Technical Skills</h4>
    <div className="flex flex-wrap gap-3">
      {[
        'IP Addressing & Subnetting',
        'Routing & Switching Concepts',
        'Basic Network Security Principles',
        'VLAN & Network Segmentation',
        'Familiarity with Cisco Devices & Configuration',
        'Network Troubleshooting Techniques',
        'Understanding of Firewalls & VPNs',
        'OSI & TCP/IP Models',
        'Packet Analysis (Wireshark)',
        'Network Monitoring Tools (Nagios, SolarWinds)',
      ].map((skill) => (
        <motion.span 
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>

  {/* Management & Administrative Skills */}
  <div>
    <h4 className="text-xl font-semibold text-gray-700 mb-2">📊 Management & Administrative Skills</h4>
    <div className="flex flex-wrap gap-3">
      {[
        'Team Leadership & Supervision',
        'Project Planning & Task Delegation',
        'Conducting Recruitment Interviews',
        'Time Management & Deadline Enforcement',
        'Budgeting & Financial Statement Review',
        'Client Relationship Management',
        'Performance Evaluation & Reporting',
        'Strategic Decision Making',
        'Staff Training & Development',
        'Crisis & Conflict Management',
      ].map((skill) => (
        <motion.span 
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>

  {/* Interpersonal & Soft Skills */}
  <div>
    <h4 className="text-xl font-semibold text-gray-700 mb-2">🤝 Interpersonal & Soft Skills</h4>
    <div className="flex flex-wrap gap-3">
      {[
        'Effective Communication (Verbal & Written)',
        'Cross-functional Team Collaboration',
        'Problem-Solving & Critical Thinking',
        'Adaptability in Fast-Paced Environments',
        'Professionalism & Accountability',
        'Presentation & Negotiation Skills',
        'Empathy and Team Motivation',
        'Multitasking & Prioritization',
      ].map((skill) => (
        <motion.span 
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>

  {/* Future-Focused / Learning Goals */}
  <div>
    <h4 className="text-xl font-semibold text-gray-700 mb-2">📈 Future-Focused / Learning Goals</h4>
    <div className="flex flex-wrap gap-3">
      {[
        'Studying for MSc in Computer Network Administration and Management',
        'Exploring Cybersecurity Fundamentals',
        'Preparing for Cisco Certifications (CCNA/CCNP)',
        'Interested in Network Automation (Python, Ansible)',
        'Expanding Knowledge in Cloud Networking (AWS, Azure)',
      ].map((skill) => (
        <motion.span 
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
</motion.div>

          
          {/* Download CV Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <a 
              href="/cv/CV for Tahmid.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}