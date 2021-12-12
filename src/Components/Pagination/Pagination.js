import React from "react";
import './Pagination.css'

const Pagination = (props) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalRows / props.rowsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (number) => {
        return () => {
            props.paginate(number)
        }
    }

    return(
        <div>
            <ul className="pagination">
                {pageNumbers.map(number =>
                    <li onClick={handleClick(number)} className='page-item' key={number}>
                        <div className='page-link'>{number}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pagination;