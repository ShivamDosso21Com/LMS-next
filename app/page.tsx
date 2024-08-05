import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-white overflow-hidden">
        <Topbar />
        <div className="flex">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
