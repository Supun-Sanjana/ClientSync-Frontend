import React, { useEffect, useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { deleteClient, fetchClients } from "../../../api/clientApi";
import toast from "react-hot-toast";

interface Client {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
}

const ClientTable: React.FC = () => {
  const [client, setClient] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const handleDelete = async (id: number) => {
    try {
      await deleteClient(id);
      toast.success("Client deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadClients = async () => {
      try {
        const res: any = await fetchClients();
        setClient(res.clients);
      } catch (err) {
        setError("Failed to fetch clients");
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, [client]);

  if (loading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Clients</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Client ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Company
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          {client.length > 0 ? (
            <tbody className="bg-white divide-y divide-gray-200">
              {client.map((client, index) => (
                <tr
                  key={client.id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-gray-100"
                      : "hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {client.id}
                  </td>

                  <td className="px-4 py-2 text-sm text-gray-700">
                    {client.first_name + " " + client.last_name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 capitalize">
                    {client.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {client.phone || "-"}
                  </td>

                  <td className="px-4 py-2 text-sm text-gray-700">
                    {client.company || "-"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <button className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 transition">
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2"
                      onClick={() => handleDelete(client.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-500">
                No Clients
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
