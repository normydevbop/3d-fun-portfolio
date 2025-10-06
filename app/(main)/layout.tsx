
export default function MainPageLayout({
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
