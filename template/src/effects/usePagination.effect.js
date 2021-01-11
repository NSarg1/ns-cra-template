import { useState, useEffect } from "react";
import useSessionStorage from "effects/useSessionStorage.effect";

const usePagination = (initialState = [], ROWS_PER_PAGE = 10) => {
    const [pageNum, setPageNum] = useState(1);
    const initialDataLength = initialState?.length;
    useEffect(() => {
        if (initialDataLength < ROWS_PER_PAGE) setPageNum(1);
        // eslint-disable-next-line
    }, [initialDataLength]);

    const pagesNumber = Math.ceil((initialDataLength || 1) / ROWS_PER_PAGE);

    const meta = { last_page: pagesNumber, current_page: pageNum, per_page: ROWS_PER_PAGE };
    const tableData = initialState?.slice((pageNum - 1) * ROWS_PER_PAGE, pageNum * ROWS_PER_PAGE);

    return { tableData, meta, setPageNum };
};

export const usePaginationPersisted = (initialState, ROWS_PER_PAGE = 10, key) => {
    const [pageNum, setPageNum] = useSessionStorage(key, 1);

    const pagesNumber = Math.ceil((initialState?.length || 1) / ROWS_PER_PAGE);

    const meta = {
        last_page: pagesNumber,
        current_page: pageNum,
        per_page: ROWS_PER_PAGE,
    };
    const tableData = initialState?.slice((pageNum - 1) * ROWS_PER_PAGE, pageNum * ROWS_PER_PAGE);

    return { tableData, meta, setPageNum };
};

export default usePagination;
