import SideBar from "../../components/side/SideBar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div className="w-1/3">
          <SideBar />
        </div>
        <div className="p-2 w-2/3 h-svh text-2xl text-slate-500 ">{children}</div>
      </div>
    </div>
  );
}
