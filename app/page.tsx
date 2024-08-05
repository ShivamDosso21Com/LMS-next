import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-white">
        <Topbar />
        <div className="flex bg-white">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
