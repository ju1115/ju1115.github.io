interface BadgeProps {
  children: React.ReactNode;
  className?: string; // 추가적인 스타일링이 필요할 때를 대비
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300 ${className} `}
    >
      {children}
    </span>
  );
}
