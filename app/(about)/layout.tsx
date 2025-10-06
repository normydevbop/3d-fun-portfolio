
export default function AboutPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <main>
        {children}
    </main>
   </div>
  );
}
