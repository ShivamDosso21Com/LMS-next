import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-white">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div className="ml-16 p-4">
        
          </div>
        </div>
      </div>
    </>
  );
}
