import React, { useEffect, useState } from 'react';
import Pagi from './Data';

const Data = ({ val }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  useEffect(() => {
    setLoading(true);
    setData(val);
    setLoading(false);
  }, [val]);
  console.log('oa', val);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return <Pagi dataPerPage={dataPerPage} totalData={val.lenght} />;
};

export default Data;
