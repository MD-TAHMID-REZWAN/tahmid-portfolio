import FlipCard from '../components/FlipCard';

const achievements = [
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    period: "16Dec 2023",
    description:
      "Completed CCNA course and earned this badge successfully, has a foundation in scalable network architectures, dynamic routing, mitigation of security threats, wide-area networks, virtualization, automation of programmable networks.",
   
    link: "https://www.credly.com/earner/earned/badge/5330ca28-c5ab-43ac-b863-3699d438787d",
    pdf: "/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate.pdf",
    bgGradient: ""
  },
  {
    title: "CyberOps Associate",
    period: "13jun 2023",
    description:
      "Completed the CyberOps Associate course and earned this badge successfully, as well as a broad understanding of security operations, developed problem-solving skills to detect and analyze intrusions.",
   
    link: "https://www.credly.com/earner/earned/badge/b3d827a7-dc42-47d3-bb05-f31f2355dd40",
    pdf: "/CyberOps_Associate_certificate.pdf",
    bgGradient: ""
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    period: "04Nov 2023",
    description:
      "Successfully completed the Switching, Routing, and Wireless Essentials course and achieved this student level credential. Has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills.",
    
    link: "https://www.credly.com/earner/earned/badge/a65c13ba-667d-4192-8e49-d9434e6f7fec",
    pdf: "/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.pdf",
    bgGradient: ""
  },
  {
    title: "CCNA: Introduction to Networks",
    period: "16Sep 2023",
    description:
      "Successfully completed the Introduction to Networks course and achieved this student level credential. Has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources.",
    
    link: "https://www.credly.com/earner/earned/badge/65d4dbf7-5302-45ba-ac74-fa1cdf6fa82f",
    pdf: "/CCNA-_Introduction_to_Networks_certificate.pdf",
    bgGradient: ""
  },
  {
    title: "2nd Round - CTO Forum HackaThon",
    period: "2022",
    description:
      "We presented our idea about the growth of farming and promoted to the 2nd round",
    image: "/images/hackathon.jpg",
    bgGradient: ""
  },
  {
    title: "CISCO IT Essential",
    period: "2020",
    description: "An IT course by CISCO",
    image: "/images/cisco.jpg",
    bgGradient: ""
  }
];

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          My Achievements
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Certifications, awards, and course completions.
        </p>
      </div>

      {/* Participation and Certification */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Participation and Certification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <FlipCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}
