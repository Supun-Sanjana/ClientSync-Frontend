import { useEffect, useState } from "react";
import { fetchClients } from "../../api/clientApi";
import { updateProject } from "../../api/projectApi";
import toast from "react-hot-toast";
import { useProjectContext } from "../../context/ProjectContext";
import { ButtonSpinner } from "../../components/ButtonSpinner";

const ProjectUpdateModel = ({ state, onClose, project }: any) => {
  const [clientId, setClientId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cost, setCost] = useState("");
  const [saving, setSaving] = useState(false);

  const [clients, setClients] = useState([]);

  const { triggerRefresh } = useProjectContext();

  // Load clients
  const loadClients = async () => {
    const res = await fetchClients();
    setClients(res.clients);
  };

  // Pre-load values
  useEffect(() => {
    loadClients();
  }, []);

  useEffect(() => {
    if (project) {
      setClientId(String(project.client_id));
      setTitle(project.title);
      setDescription(project.description);
      setStatus(project.status);
      setCost(project.cost);
      setStartDate(project.start_date ? project.start_date.split("T")[0] : "");
      setEndDate(project.end_date ? project.end_date.split("T")[0] : "");
    }
  }, [project]);

  // Save update
  const handleUpdate = async (e: any) => {
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
      await updateProject(project.id, payload);
      toast.success("Project updated successfully");

      triggerRefresh();
      onClose();
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "Failed to update project");
    }
    setSaving(false);
  };

  if (!state) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[480px] bg-white p-6 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Update Project</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form className="space-y-4">
          {/* CLIENT */}
          <div>
            <label className="block text-sm mb-1 font-medium">Select Client</label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={clientId}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            ></textarea>
          </div>

          {/* STATUS + COST */}
          <div>
            <label className="block text-sm mb-1 font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <label className="block text-sm mt-2 mb-1 font-medium">Cost</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 font-medium">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              disabled={saving}
              onClick={handleUpdate}
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2"
            >
              {saving ? <ButtonSpinner /> : "Update Project"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpdateModel;
