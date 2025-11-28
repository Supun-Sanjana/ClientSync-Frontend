import { useEffect, useState } from "react";
import { updateClient } from "../../api/clientApi";
import toast from "react-hot-toast";
import { useClientContext } from "../../context/ClientContext";
import { ButtonSpinner } from "../../components/ButtonSpinner";

const ClientUpdateModel = (props: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [saving, setSaving] = useState(false);

  const { triggerClientRefresh } = useClientContext();

  // Load data when props.client changes
  useEffect(() => {
    if (props.client) {
      setFirstName(props.client.first_name);
      setLastName(props.client.last_name);
      setEmail(props.client.email);
      setPhone(props.client.phone || "");
      setCompany(props.client.company || "");
    }
  }, [props.client]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (!props.client) return;

    setSaving(true);

    try {
      await updateClient(props.client.id, {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        company,
      });

      triggerClientRefresh();
      toast.success("Client updated successfully");
      props.onClose();
    } catch (error: any) {
      toast.error(error.message || "Update failed");
      console.log(error);
    }

    setSaving(false);
  };

  return (
    <>
      {props.state && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex justify-center items-center"
          onClick={props.onClose}
        >
          <div
            className="w-[450px] bg-white p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update Client</h2>
              <button
                onClick={props.onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter client first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter client last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company (Optional)
                </label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter company"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 disabled:opacity-50"
                  onClick={(e) => handleUpdate(e)}
                >
                  {saving ? <ButtonSpinner /> : "Update Client"}
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

export default ClientUpdateModel;
