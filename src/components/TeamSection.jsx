import { useState } from 'react';
import core1 from '../assets/c0kartikKapoor1.png'
import core2 from '../assets/c2yashBirla.png'
import core3 from '../assets/c3balliHangSubba.png'
import core4 from '../assets/c4pravirKrishna.png'
import core5 from '../assets/c5deepakPatil.png'
import core6 from '../assets/c6fasihuddinSyed.png'
import core7 from '../assets/c7mickulArora.png'

// Define team data (add your imported images)
const teamData = [
  {
    img: core1,
    name: 'Kartik Kapoor',
    role: 'Founder & Director',
    description: 'Kartik Kapoor is an India-based entrepreneur and the Founder & Managing Director of Kossher Group, bringing over a decade of hands-on experience in building agricultural businesses from inception to scale. For the Bastar core team, Kartik’s journey is closely associated with the creation and growth of Bastar Farms, the flagship consumer brand under Kossher Agro. The brand reflects a strong commitment to value addition, consistent quality, and meaningful community upliftment.'
  },
  {
    img: core2,
    name: 'Yash Birla',
    role: 'Co Founder & CEO',
    description: 'Yash Birla is a core team member and the CEO of Bastar Farms, the flagship consumer brand of Kossher Agro. With more than a decade of experience in multinational environments, he brings institutional rigor, operational discipline, and a proven ability to build scalable businesses. He leads the company’s strategic roadmap with a focus on profitable growth, brand expansion, supply-chain strength, and long-term value creation.'
  },
  {
    img: core3,
    name: 'Balli Hang Subba',
    role: 'Director',
    description: 'Balli Hang Subba is a respected tribal business leader, a founding member of Kossher Agro, and Director at Bastar Farms. With over a decade of experience across agro and manufacturing ventures, he brings deep operational knowledge and strong grassroots understanding to the organization.'
  },
  {
    img: core4,
    name: 'Pravir Krishna',
    role: 'Executive Director',
    description: 'Pravir Krishna is Executive Director and a distinguished public servant and development leader, widely recognized for his contribution to India’s tribal and agro-based value chains. As the former Managing Director of TRIFED, he played a transformative role in strengthening market access, institutional frameworks, and livelihood opportunities for forest and farm communities.'
  },
  {
    img: core5,
    name: 'Deepak Patil',
    role: 'Chief Financial Officer',
    description: 'CA. Deepak Patil is a Pune based Chartered Accountant with over 13 years of experience in finance and statutory compliance. As Chief Financial Officer at Bastar Farms, he manages financial strategy, compliance, and sustainable growth initiatives.'
  },
  {
    img: core6,
    name: 'Fasihuddin Syed',
    role: 'Food Advisor',
    description: 'Fasihuddin Syed is an India based food industry expert with over 42 years of experience across product development, processing, and food technology projects. As Food Advisor at Bastar Farms, he guides product innovation and quality standards for the products.'
  },
  {
    img: core7,
    name: 'Mickul Arora',
    role: 'Production Head',
    description: 'Mickul Arora is a passionate team leader with over a decade of experience in managing manufacturing teams and driving operational excellence. As the Production Head, he leads the operations at the Lohandiguda facility, ensuring efficient processing of tamarind products, adherence to quality standards, and continuous improvement in productivity and safety.'
  }
];

// TeamCard component with internal read‑more state
const TeamCard = ({ img, name, role, description }) => {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 120; // Slightly shorter for better mobile fit

  const toggleReadMore = () => setExpanded(!expanded);

  const shouldTruncate = description.length > truncateLength;
  const displayText = !expanded && shouldTruncate
    ? description.slice(0, truncateLength).trim() + '…'
    : description;

  return (
    <div className="flex flex-col items-center border-[1px] pb-6 rounded-2xl shadow-md overflow-hidden bg-white h-full transition-all duration-300 hover:shadow-xl">
      <div className="p-3 w-full">
        <img
          src={img}
          alt={name}
          className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl border-4 border-[#2a491d]"
        />
      </div>
      
      <div className="px-6 py-2 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-[#50a72c] font-caveat font-semibold text-sm md:text-base uppercase tracking-wider mb-3">{role}</p>
      </div>

      <div className="px-6 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center italic">
          "{displayText}"
        </p>
        
        {shouldTruncate && (
          <button
            onClick={toggleReadMore}
            className="text-[#2a491d] font-caveat hover:underline font-bold text-sm mt-4 mx-auto block"
          >
            {expanded ? 'Show Less ↑' : 'Read Full Bio ↓'}
          </button>
        )}
      </div>
    </div>
  );
};

const TeamSection = () => {
  // Split the data into two sets
  const firstRow = teamData.slice(0, 3);
  const secondRow = teamData.slice(3, 7);

  return (
    <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 space-y-12">
      
      {/* First Row: 3 Members */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-14">
        {firstRow.map((member, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1rem)] max-w-[400px]">
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Second Row: 4 Members */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-8">
        {secondRow.map((member, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(23%-1rem)] max-w-[350px]">
            <TeamCard {...member} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default TeamSection;