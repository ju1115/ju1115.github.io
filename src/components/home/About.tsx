import Image from 'next/image';
// React Icons (필요한 아이콘들 불러오기)
import { FaReact, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiMysql, SiApachekafka } from 'react-icons/si';
import Badge from '../common/Badge';
import profileImg from '@/assets/images/profile_side_view.jpg';

// 🛠️ 스킬 데이터 정의 (이름 + 아이콘)
const SKILLS = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'Kafka', icon: <SiApachekafka className="text-black dark:text-white" /> },
  { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
];

export default function About() {
  return (
    <section id="about" className="bg-base-white w-full scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[100px]">
        {/* 전체 레이아웃: 왼쪽(사진) | 오른쪽(내용) */}
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* ==========================
              1. 왼쪽: 프로필 이미지 (Offset 효과)
             ========================== */}
                    <div className="relative aspect-square w-full max-w-[400px] md:aspect-[4/5]">
                      {/* 1. 뒤에 깔리는 그림자 박스 (Offset 효과용) */}
                      <div className="absolute top-4 right-4 h-full w-full rounded-[32px] bg-gray-200 dark:bg-gray-800 "></div>
          
                      {/* 2. 실제 사진 영역 */}
          
                      
                      {/* [수정 포인트 1] 부모 div: 그림자(shadow-xl) 담당, overflow-hidden 제거 */}
                      <div className="relative h-full w-full rounded-[32px] ">
                        
                        {/* [수정 포인트 2] 자식 div: 이미지 클리핑(overflow-hidden) 담당 */}
                        {/* rounded-[32px]는 부모와 맞춰줘야 모서리가 안 튀어나옵니다 */}
                        {/* <div className="h-full w-full overflow-hidden rounded-[32px]"> */}
                          <Image 
                            src={profileImg} 
                            alt="Profile" 
                            fill 
                            className="rounded-[32px] object-cover" 
                            priority 
                          />
                        {/* </div> */}
                      </div>
                    </div>

          {/* ==========================
              2. 오른쪽: 소개 & 스킬
             ========================== */}
          <div className="flex flex-col gap-12">
            {/* 🅰️ 소개 섹션 */}
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              {/* Badge: About Me */}
              <Badge>About Me</Badge>

              {/* Title */}
              <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                저는 어떤 사람인가요?
              </h2>

              {/* Description (본문) */}
              <div className="text-body-1 space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  안녕하세요, 저는 <strong>열정적인 개발자 이승주</strong>입니다. 풀스택 개발자로
                  성장하기 위해 끊임없이 학습하고 도전합니다.
                </p>
                <p>
                  프론트엔드에 대해 Next.js, React를 기반으로 사용자 경험을 개선하는 데 관심이
                  많으며, 백엔드와 인프라 설계에도 깊은 흥미를 가지고 있습니다.
                </p>
                <p>
                  GitHub를 활용하여 공부한 내용을 정리하고, 매일 알고리즘을 풀며 논리적 사고력을
                  키우기 위해 노력하고 있습니다.
                </p>
              </div>
            </div>

            {/* 🅱️ 스킬 섹션 */}
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              {/* Badge: Skills */}
              <Badge>Skills</Badge>

              {/* Skills Grid (4열 배치) */}
              <div className="grid w-full grid-cols-4 gap-x-8 gap-y-8 md:w-auto">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="group flex flex-col items-center gap-2">
                    {/* 아이콘 (Hover 시 살짝 위로 뜸) */}
                    <div className="rounded-2xl bg-gray-50 p-3 text-4xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:bg-gray-800">
                      {skill.icon}
                    </div>

                    {/* 스킬 이름 */}
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
