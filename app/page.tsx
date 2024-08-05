import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-white">
        <Topbar />
        <div className="flex bg-white">
          <Sidebar />
          <div className="ml-16 p-4">
        
          </div>
        </div>
      </div>
    </>
  );
}
