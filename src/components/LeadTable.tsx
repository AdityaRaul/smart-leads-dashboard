import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import api from "../services/api";
import AddLeadModal from "./AddLeadModal";

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
  createdAt: string;
}

interface Props {
  search: string;
  status: string;
  source: string;
  sort: string;
  page: number;
  setPage: (page: number) => void;
}

const LeadTable = ({
  search,
  status,
  source,
  sort,
  page,
  setPage,
}: Props) => {

  const [leads, setLeads] = useState<Lead[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        `/leads?page=${page}&status=${status}&source=${source}&search=${search}&sort=${sort}`
      );

      setLeads(response.data.leads);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchLeads();

  }, [search, status, source, sort, page]);

  if (loading) {

    return (
      <div className="text-center text-2xl py-10">
        Loading...
      </div>
    );
  }

  return (

    <>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="flex justify-between items-center p-4 border-b">

          <h2 className="text-xl font-bold">
            Leads List
          </h2>

          <div className="flex gap-3">

            <CSVLink
              data={leads}
              filename="leads.csv"
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Export CSV
            </CSVLink>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add Lead
            </button>

          </div>

        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Source</th>
              <th className="text-left p-4">Created At</th>
              <th className="text-left p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {leads.length === 0 && (

              <tr>

                <td
                  colSpan={6}
                  className="text-center p-6"
                >
                  No Leads Found
                </td>

              </tr>
            )}

            {leads.map((lead) => (

              <tr key={lead._id} className="border-t">

                <td className="p-4">
                  {lead.name}
                </td>

                <td className="p-4">
                  {lead.email}
                </td>

                <td className="p-4">
                  {lead.status}
                </td>

                <td className="p-4">
                  {lead.source}
                </td>

                <td className="p-4">
                  {new Date(
                    lead.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4 flex gap-3">

                  <button
                    onClick={async () => {

                      const newStatus = prompt(
                        "Enter New Status"
                      );

                      if (!newStatus) return;

                      await api.put(
                        `/leads/${lead._id}`,
                        {
                          status: newStatus,
                        }
                      );

                      fetchLeads();
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={async () => {

                      await api.delete(
                        `/leads/${lead._id}`
                      );

                      fetchLeads();
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        <div className="flex justify-center gap-4 p-6">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="bg-gray-300 px-4 py-2 rounded-lg"
          >
            Prev
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {page}
          </button>

          <button
            onClick={() => setPage(page + 1)}
            className="bg-gray-300 px-4 py-2 rounded-lg"
          >
            Next
          </button>

        </div>

      </div>

      {openModal && (

        <AddLeadModal
          closeModal={() =>
            setOpenModal(false)
          }
          refreshLeads={fetchLeads}
        />

      )}

    </>
  );
};

export default LeadTable;