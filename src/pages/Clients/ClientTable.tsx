import { useEffect, useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { deleteClient, fetchClients } from "../../api/clientApi";
import toast from "react-hot-toast";
import { useClientContext } from "../../context/ClientContext";
import { Spinner } from "../../components/Spinner";
import { ErrorMessage } from "../../components/ErrorMessage";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Client {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
}

const ClientTable = () => {
  const [client, setClient] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const { refreshClients, triggerClientRefresh } = useClientContext();

  
    const [selectedClientId, setSelectedClientId ] = useState<number | null>(
      null
    );
  

  // const handleDelete = async (id: number) => {
  //   try {
  //     await deleteClient(id);
  //     toast.success("Client deleted successfully");
  //     triggerClientRefresh();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  useEffect(() => {
    loadClients();
  }, [refreshClients]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Clients</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 bg-gray-800">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Client ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          {client?.length > 0 ? (
            <tbody className="bg-white divide-y divide-slate-200">
              {client.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    #{client.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {`${client.first_name || ""} ${client.last_name || ""}`}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {client.email}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {client.phone || "-"}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {client.company || "-"}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-3">
                      <button className="cursor-pointer p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        onClick={() => setSelectedClientId(client.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-slate-200">
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-slate-400 text-sm"
                >
                  No Clients available
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

       <AlertDialog
              open={selectedClientId !== null}
              onOpenChange={(open) => {
                if (!open) setSelectedClientId(null);
              }}
            >
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this
                    project.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={async () => {
                      if (selectedClientId !== null) {
                        try {
                          await deleteClient(selectedClientId);
                          triggerClientRefresh();
                          toast.success("Project deleted successfully");
                          const updated = await fetchClients();
                          setClient(updated);
                        } catch (err: any) {
                          toast.error(err.message || "Failed to delete project");
                        } finally {
                          setSelectedClientId(null);
                        }
                      }
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

    </div>
  );
};

export default ClientTable;
