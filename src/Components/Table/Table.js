import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import './Table.css'
import Row from '../Row/Row'
import Pagination from "../Pagination/Pagination";


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

    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(10)

    const lastRowIndex = currentPage * rowsPerPage
    const firstRowIndex = lastRowIndex - rowsPerPage
    const currentRow = heroes.slice(firstRowIndex, lastRowIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const copyHeroes = heroes.concat()

    // const [sort, setSort] = useState(0)

    // const handlePowerSort = () => {
    //     if (sort < 2) {
    //         setSort(sort + 1)
    //     } else {setSort(0)}
    // }

    const handleSort = (field) => {
        if (field !== 'name') {
            copyHeroes.sort((a, b) => a[field] - b[field])
            console.log(copyHeroes)
        } else {
            copyHeroes.sort((a, b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            } )
            console.log(copyHeroes)
        }
    }


    // useEffect(() => {
    //     if(sort === 1) {
    //         setHeroes(copyHeroes.sort((a, b) => parseFloat(a.power) - parseFloat(b.power)))
    //     } else if (sort === 2) {
    //         setHeroes(copyHeroes.sort((a, b) => parseFloat(b.power) - parseFloat(a.power)))
    //     } else {
    //         setHeroes(heroes)
    //     }
    // }, [sort]);



    return (
        <div className='table'>
            <div className='table_header'>
                <div className="table_header_item" onClick={() => handleSort('id')}>Number</div>
                <div className="table_header_item" onClick={() => handleSort('name')}>Name</div>
                <div className="table_header_item" onClick={() => handleSort('power')}>Power</div>
                <div className="table_header_item" onClick={() => handleSort('status')}>Status</div>
            </div>
            {currentRow.map((hero, index) => <Row hero = {hero} key={index}/>)}

            <Pagination
                rowsPerPage = {rowsPerPage}
                totalRows = {heroes.length}
                paginate = {paginate}
            />

        </div>
    )
}

export default Table;