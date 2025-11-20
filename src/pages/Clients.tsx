import React from "react";
import AdminHeader from "../components/layout/Header";
import ClientTable from "../components/layout/Clients/ClientTable";

const Clients = () => {
  return (
    <div>
      <AdminHeader />
      <ClientTable/>
    </div>
  );
};

export default Clients;
