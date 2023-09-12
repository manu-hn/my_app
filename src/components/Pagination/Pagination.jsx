// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import axios from "axios";

// const Pagination = () => {

//     const [currentPage, setCurrentPage] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);
//     const itemsPerPage = 10

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
//             setData(response.data);
//             setTotalPages(Math.ceil(response.data.length / itemsPerPage))
//         });
//     }, []);

//     return (
//         <>
//             <ReactPaginate

//             />

//         </>)
//         ;
// }

// export default Pagination;