import PageControl from './PageControl';
import usePagination from './Pagination';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

const PaginationContainer = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;
  & button {
    border-radius: 50%;
    width: 3.5rem !important;
    height: 3.5rem !important;
    background-color: transparent !important;
    border: 1px solid ${({ theme }) => theme.bgPaginationBorder};
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }
  & .Mui-selected{
    background-color: ${({ theme }) => theme.bgPaginationBorder }!important;
  }

`;

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
