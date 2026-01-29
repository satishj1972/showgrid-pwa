interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const PageContainer = ({ children, className = '', noPadding = false }: PageContainerProps) => {
  return (
    <main className={`max-w-7xl mx-auto ${noPadding ? '' : 'px-4 py-6'} pb-20 md:pb-6 ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
