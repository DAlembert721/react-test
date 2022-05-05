import React, {useId} from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const TablePaginator = ({pages, page, setPage}) => {
    const pagesArray = Array.from({length: pages}, (v, i) => i+1);
    return(
        <Pagination aria-label='aea'>
            <PaginationItem disabled={page===1}>
                <PaginationLink
                    first
                    onClick={() => setPage(1)}
                />
            </PaginationItem>
            <PaginationItem disabled={page===1}>
                <PaginationLink
                    onClick={() => setPage(page - 1)}
                    previous
                />
            </PaginationItem>
            {
                pagesArray.map(p => (
                    <PaginationItem key={useId()}>
                        <PaginationLink onClick={() => setPage(p)}>
                            {p}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            <PaginationItem disabled={page === pages}>
                <PaginationLink
                    onClick={() => setPage(page+1)}
                    next
                />
            </PaginationItem>
            <PaginationItem disabled={page === pages}>
                <PaginationLink
                    onClick={() => setPage(pages)}
                    last
                />
            </PaginationItem>
        </Pagination>
    );
}

export default TablePaginator;