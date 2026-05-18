import { useState } from "react";
import api from "../services/api";

interface Props {
  closeModal: () => void;
  refreshLeads: () => void;
}

const AddLeadModal = ({
  closeModal,
  refreshLeads,
}: Props) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "New",
    source: "LinkedIn",
  });

  const handleSubmit = async () => {

    try {

      if (
        !formData.name ||
        !formData.email
      ) {

        alert("All fields required");

        return;
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(
          formData.email
        )
      ) {

        alert("Invalid Email");

        return;
      }

      await api.post(
        "/leads",
        formData
      );

      refreshLeads();

      closeModal();

      alert("Lead Added Successfully");

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      <div className="bg-white w-[500px] rounded-2xl p-10">

        <h2 className="text-4xl font-bold mb-8">
          Add New Lead
        </h2>

        <div className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="border p-5 rounded-2xl"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="border p-5 rounded-2xl"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
            className="border p-5 rounded-2xl"
          >

            <option>
              New
            </option>

            <option>
              Qualified
            </option>

            <option>
              Contacted
            </option>

            <option>
              Closed
            </option>

          </select>

          <select
            value={formData.source}
            onChange={(e) =>
              setFormData({
                ...formData,
                source: e.target.value,
              })
            }
            className="border p-5 rounded-2xl"
          >

            <option>
              LinkedIn
            </option>

            <option>
              Instagram
            </option>

            <option>
              Facebook
            </option>

            <option>
              Website
            </option>

          </select>

          <div className="flex justify-end gap-4">

            <button
              onClick={closeModal}
              className="bg-gray-400 text-white px-6 py-3 rounded-2xl"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl"
            >
              Save Lead
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddLeadModal;