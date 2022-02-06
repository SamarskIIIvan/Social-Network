import React from "react";
import s from "./Paginator.module.scss"

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export function Paginator(props: PaginatorPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.paginatorBlock}>
            {pages.map(page => {
                //@ts-ignore
                return <span className={props.currentPage === page && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
    )
}