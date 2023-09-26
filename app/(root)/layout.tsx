import Footer from '@/components/footer';
import { MainNav } from '@/components/nav';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNav className="bg-secondary-foreground"/>
          {children}
      <Footer/>
    </>
  );
};
