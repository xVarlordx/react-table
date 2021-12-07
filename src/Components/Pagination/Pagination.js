import React from "react";
import './Pagination.css'

const Pagination = (props) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalRows / props.rowsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul className="pagination">
                {pageNumbers.map(number =>
                    <li className='page-item' key={number}>
                        <a onClick={() => props.paginate(number)} href="!#" className='page-link'>{number}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pagination;