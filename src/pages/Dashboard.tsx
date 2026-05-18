import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FilterBar from "../components/FilterBar";
import LeadTable from "../components/LeadTable";

const Dashboard = () => {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  return (

    <MainLayout>

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        source={source}
        setSource={setSource}
        sort={sort}
        setSort={setSort}
      />

      <LeadTable
        search={search}
        status={status}
        source={source}
        sort={sort}
        page={page}
        setPage={setPage}
      />

    </MainLayout>
  );
};

export default Dashboard;