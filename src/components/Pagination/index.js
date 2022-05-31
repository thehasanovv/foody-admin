import PageControl from "./PageControl";
import usePagination from "./Pagination";
import { useState } from "react";
import { PaginationContainer } from "./PaginationStyle";

export default function Pagi({ data, comp }) {
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const datas = _DATA.currentData();

  return (
    <>
      <PageControl comp={comp} datas={datas} />
      <PaginationContainer
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );
}
