import { Outlet } from "react-router";
import AdminHeader from "./components/layout/Header";

export default function AppLayout() {
  return (
    <>
      <AdminHeader />
      <div>
        <Outlet/>
      </div>
    </>
  );
}
