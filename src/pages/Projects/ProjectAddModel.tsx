import { useEffect, useState } from "react";
import { fetchClients } from "../../api/clientApi";
import { saveProject } from "../../api/projectApi";
import toast from "react-hot-toast";
import { useProjectContext } from "../../context/ProjectContext";
import { ButtonSpinner } from "../../components/ButtonSpinner";

const ProjectAddModel = (props: any) => {
  const [clientId, setClientId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [saving, setSaving] = useState(false);

  const [clients, setClients] = useState([]);
  const [cost, setCost] = useState("");

  const { triggerRefresh } = useProjectContext();

  const Clients = async () => {
    const res = await fetchClients();
    setClients(res.clients);
  };

  useEffect(() => {
    Clients();
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      client_id: Number(clientId),
      title,
      description,
      cost,
      status,
      start_date: startDate ? new Date(startDate).toISOString() : null,
      end_date: endDate ? new Date(endDate).toISOString() : null,
    };

    try {
      await saveProject(payload);
      toast.success("Project added successfully");

      triggerRefresh(); // <-- tells Projects table to reload

      props.onClose();
    } catch (error: any) {
      console.log(error.message || error);
      toast.error(error.message || error);
    }
    setSaving(false);
  };

  return (
    <>
      {props.state && (
        <div
          className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center"
          onClick={props.onClose}
        >
          <div
            className="w-[480px] bg-white p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Project</h2>
              <button
                onClick={props.onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              {/* CLIENT */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Select Client
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => setClientId(e.target.value)}
                >
                  <option value="">Choose Client</option>
                  {clients?.map((c: any) => (
                    <option key={c.id} value={c.id}>
                      {c.first_name} {c.last_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* TITLE */}
              <div>
                <label className="block text-sm mb-1 font-medium">Title</label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Project title"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Description (optional)
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Project description"
                ></textarea>
              </div>

              <div>
                {/* STATUS */}
                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Status
                  </label>
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">Cost</label>
                  <input
                    type="number"
                    onChange={(e) => setCost(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Project Cost"
                  />
                </div>
              </div>

              {/* DATES */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Start Date (optional)
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">
                    End Date (optional)
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 disabled:opacity-50"
                  onClick={(e) => handleSave(e)}
                >
                  {saving ? <ButtonSpinner /> : "Add Project"}
                </button>

                <button
                  type="button"
                  onClick={props.onClose}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectAddModel;
