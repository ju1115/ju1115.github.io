import Image from 'next/image';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi'; // 링크 아이콘
import { FaGithub } from 'react-icons/fa'; // 깃허브 아이콘
import Badge from '@/components/common/Badge'; // 아까 분리한 Badge 컴포넌트

// 🛠️ 프로젝트 데이터 (나중에 내용만 여기서 바꾸면 됩니다)
const PROJECT_LIST = [
  {
    id: 1,
    title: 'Matching SSAFY',
    description:
      '삼성 SW 아카데미 내의 룸메이트 매칭 애플리케이션입니다. 백엔드 담당으로 참가하여 팀원, 채팅, 매칭 알고리즘 기능을 담당했습니다. 테스트코드를 작성하여 70%의 코드 커버리지를 달성했습니다.',
    tags: ['Spring Boot', 'Java', 'React', 'JPA', 'Docker', 'MySQL'],
    image: '/public/Maching_SSAFY_Main',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com/ju1115/Matching_SSAFY',
    },
  },
  {
    id: 2,
    title: 'BISKIT',
    description:
      'AI 기반 소상공인 장소추천 서비스입니다. 프론트엔드, 인프라를 담당하여 Jenkins를 활용한 CI/CD 자동화를 구축했습니다. Docker 환경 설정을 통해 배포 효율을 40% 증대시켰습니다.',
    tags: ['Next.js', 'Jenkins', 'Docker', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com/ju1115/BISKIT',
    },
  },
  {
    id: 3,
    title: 'ILOG',
    description:
      '육아일기 플랫폼입니다. Fullstack 개발자로 참여하여 일기, 로그인 파트를 맡았습니다. React 기반 프론트 페이지를 구성하고 Zustand를 활용하여 전역 상태 관리를 적용했습니다.',
    tags: ['Postgres', 'Spring JPA', 'React', 'Kafka'],
    image:
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2340&auto=format&fit=crop',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com/ju1115/ilog',
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 bg-gray-50 py-20 md:py-32 dark:bg-gray-900"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[100px]">
        {/* 섹션 헤더 */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <Badge>Work</Badge>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Projects</h2>
          <p className="text-body-1 max-w-2xl text-gray-600 dark:text-gray-400">
            제가 진행했던 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* 프로젝트 리스트 (반복문) */}
        <div className="flex flex-col gap-32">
          {' '}
          {/* 프로젝트 간 간격 넓게 */}
          {PROJECT_LIST.map((project, index) => (
            <div
              key={project.id}
              className={`/* 👇 짝수(0,2..)는 정방향, 홀수(1,3..)는 반대방향(사진이 오른쪽) */ flex flex-col items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} `}
            >
              {/* 🖼️ 프로젝트 이미지 영역 (절반 차지) */}
              <div className="w-full md:w-1/2">
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* 📝 프로젝트 설명 영역 (절반 차지) */}
              <div className="flex w-full flex-col items-start gap-6 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  {project.title}
                </h3>

                <p className="text-body-1 leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* 기술 스택 칩 (단순 회색 뱃지) */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 버튼들 */}
                <div className="mt-2 flex gap-4">
                  {/* 데모 링크 */}
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-emerald-500"
                  >
                    <FiLink size={20} />
                    <span className="underline decoration-2 underline-offset-4">Visit Site</span>
                  </Link>

                  {/* 깃허브 링크 */}
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-emerald-500"
                  >
                    <FaGithub size={20} />
                    <span className="underline decoration-2 underline-offset-4">Github</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
