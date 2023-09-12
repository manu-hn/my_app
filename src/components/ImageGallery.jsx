import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from "./Images"

const URL = 'https://picsum.photos/v2/list';

const ImagesGallery = () => {
    
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`${URL}?page=${page}&limit=10`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage + 1);
    }, [currentPage]);

    const handlePageChange = (value) => {
        setCurrentPage(value.selected);
    };

    return (
        <div className="text-[1vw] p-[1em]">

            <div className="sm:grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-[1.5em]">
                {data.map((item) => (
                    <Image key={item.id} item={item} />
                ))}
            </div>

            <div className="mt-[2em] h-[2em]">
                <ReactPaginate
                    pageCount={10}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="pagination flex justify-center"
                    activeClassName="bg-blue-500 text-white"
                    pageClassName="px-2 py-1 mx-2 border border-gray-300 rounded"
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakClassName="px-2 py-1 mx-2 border border-gray-300 rounded"
                    breakLabel="..."
                    disabledClassName="opacity-50"
                />
            </div>
        </div>
    );
};

export default ImagesGallery;
