import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const HomeLayouts = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>BMTP</title>
      </Head>
      <div className="h-screen w-full flex items-start justify-start">
        <aside className="w-64 h-screen">
          <Sidebar />
        </aside>
        <aside className="flex-1 h-screen overflow-hidden bg-gray-50 flex flex-col">
          <section className="w-full">
            <Navbar />
          </section>
          <section className="flex-1 h-full">{children}</section>
        </aside>
      </div>
    </div>
  );
};
