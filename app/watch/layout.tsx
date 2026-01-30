export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-dark">
      {children}
    </div>
  );
}
