import { debounce } from "lodash";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  source: string;
  setSource: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
}

const FilterBar = ({
  search,
  setSearch,
  status,
  setStatus,
  source,
  setSource,
  sort,
  setSort,
}: Props) => {

  const debouncedSearch = debounce(
    (value: string) => {

      setSearch(value);

    },
    500
  );

  return (

    <div className="bg-white p-6 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) =>
          debouncedSearch(
            e.target.value
          )
        }
        className="border p-4 rounded-xl"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="border p-4 rounded-xl"
      >

        <option value="">
          Status
        </option>

        <option value="New">
          New
        </option>

        <option value="Qualified">
          Qualified
        </option>

        <option value="Lost">
          Lost
        </option>

      </select>

      <select
        value={source}
        onChange={(e) =>
          setSource(e.target.value)
        }
        className="border p-4 rounded-xl"
      >

        <option value="">
          Source
        </option>

        <option value="Instagram">
          Instagram
        </option>

        <option value="LinkedIn">
          LinkedIn
        </option>

        <option value="Facebook">
          Facebook
        </option>

      </select>

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
        className="border p-4 rounded-xl"
      >

        <option value="latest">
          Latest
        </option>

        <option value="oldest">
          Oldest
        </option>

      </select>

    </div>
  );
};

export default FilterBar;