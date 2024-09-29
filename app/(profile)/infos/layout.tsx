import LogOutBtn from "@/components/LogOutBtn";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div>
<div className="w-full bg-slate-900 px-4 lg:px-24 py-5">
  <LogOutBtn/>
</div>
        {children}
</div>

  );
}
