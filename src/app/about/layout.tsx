export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center pt-16 bg-zinc-900 text-white">
      {children}
    </div>
  );
}
