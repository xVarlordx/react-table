import React from "react";
import {useState} from "react";
import Row from '../Row/Row'
import Pagination from "../Pagination/Pagination";
import './Table.css'


const Table = () => {

    const [heroes, setHeroes] = useState([
        {id: 1, name: 'Jim', power: 100, status: 'off'},
        {id: 2, name: 'Bob', power: 200, status: 'off'},
        {id: 3, name: 'Adam', power: 300, status: 'off'},
        {id: 4, name: 'Sally', power: 400, status: 'off'},
        {id: 5, name: 'Eva', power: 500, status: 'off'},
        {id: 6, name: 'Richard', power: 600, status: 'off'},
        {id: 7, name: 'James', power: 700, status: 'off'},
        {id: 8, name: 'Victoria', power: 800, status: 'off'},
        {id: 9, name: 'Jhonatan', power: 900, status: 'off'},
        {id: 10, name: 'Victor', power: 1000, status: 'off'},
        {id: 12, name: 'Artur', power: 110, status: 'off'},
        {id: 13, name: 'Jesus', power: 290, status: 'off'},
        {id: 14, name: 'Mark', power: 320, status: 'off'},
        {id: 15, name: 'Greta', power: 150, status: 'off'},
    ])
    const [sortedHeroes, setSortedHeroes] = useState([...heroes])
    const [sortOrder, setSortOrder] = useState('ascending')
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const lastRowIndex = currentPage * rowsPerPage
    const firstRowIndex = lastRowIndex - rowsPerPage
    const currentRow = sortedHeroes.slice(firstRowIndex, lastRowIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // const [sortConfig, setSortConfig] = useState(null)
    //
    // const requestSort = key => {
    //     let direction = 'ascending';
    //     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
    //         direction = 'descending';
    //     } else if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
    //         direction = 'normal';
    //     }
    //     setSortConfig({ key, direction });
    // }
    //
    // if (sortConfig !== null) {
    //     sortedHeroes.sort((a, b) => {
    //         if (a[sortConfig.key] < b[sortConfig.key]) {
    //             return sortConfig.direction === 'ascending' ? -1 : 1;
    //         }
    //         if (a[sortConfig.key] > b[sortConfig.key]) {
    //             return sortConfig.direction === 'ascending' ? 1 : -1;
    //         }
    //         return 0;
    //     });
    // }

    const sorting = (field) => {
        if (sortOrder === 'ascending') {
            const sorted = [...heroes].sort((a, b) =>
            a[field] > b[field] ? 1 : -1
            );
            setSortedHeroes(sorted);
            setSortOrder('descending')
        }
        if (sortOrder === 'descending') {
            const sorted = [...heroes].sort((a, b) =>
                a[field] < b[field] ? 1 : -1
            );
            setSortedHeroes(sorted);
            setSortOrder('default')
        }
        if (sortOrder === 'default') {
            const sorted = [...heroes].sort((a, b) =>
                a[field] < b[field] ? 1 : -1
            );
            setSortedHeroes(heroes);
            setSortOrder('ascending')
        }
    }
    const handleSort = field => {
        return () => {
            sorting(field)
        }
    }

    return (
        <div className='table'>
            <div className='table_header'>
                <div className="table_header_item" onClick={handleSort('id')}>Number</div>
                <div className="table_header_item" onClick={handleSort('name')}>Name</div>
                <div className="table_header_item" onClick={handleSort('power')}>Power</div>
                <div className="table_header_item" onClick={handleSort('status')}>Status</div>
            </div>

            {currentRow.map((hero, index) => <Row hero={hero} key={index}/>)}

            <Pagination
                rowsPerPage = {rowsPerPage}
                totalRows = {heroes.length}
                paginate = {paginate}
            />

        </div>
    )
}

export default Table;