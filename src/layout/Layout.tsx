import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
