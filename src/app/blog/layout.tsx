export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center py-16 min-h-screen text-white">
      {children}
    </div>
  );
}
