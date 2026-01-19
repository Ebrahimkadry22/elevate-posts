import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const Postpagination = ({
   totalPages,
  currentPage,
  dispatch,
}) => {

  // const totalpages = Math.ceil(totalPosts / postsPerPage)
  const pages = Array.from({length:totalPages},(_,i)=>i+1)
  // console.log(totalPages);
  
  return (
 <Pagination>
      <PaginationContent>
        {/* First */}
        <PaginationItem>
          <PaginationLink
            onClick={() => dispatch({ type: "SET_PAGE", payload: 1 })}
            className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
          >
            <ChevronsLeft />
          </PaginationLink>
        </PaginationItem>

        {/* Prev */}
        <PaginationItem>
          <PaginationLink
            onClick={() =>
              dispatch({ type: "SET_PAGE", payload: currentPage - 1 })
            }
            className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
          >
            <ChevronLeft size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Numbers */}
        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              onClick={() =>
                dispatch({ type: "SET_PAGE", payload: p })
              }
              isActive={currentPage === p}
              className={`rounded-full cursor-pointer ${
                currentPage === p ? "bg-blue-500 text-white" : ""
              }`}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem >
          <PaginationLink
            onClick={() =>
              dispatch({ type: "SET_PAGE", payload: currentPage + 1 })
            }
            className={
              currentPage === totalPages
                ? "opacity-50 pointer-events-none"
                : ""
            }
          >
            <ChevronRight size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Last */}
        <PaginationItem>
          <PaginationLink
            onClick={() =>
              dispatch({ type: "SET_PAGE", payload: totalPages })
            }
            className={
              currentPage === totalPages
                ? "opacity-50 pointer-events-none"
                : ""
            }
          >
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default React.memo(Postpagination);
  {/* <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="rounded-full hover:bg-blue-600"
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" className="rounded-full">
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" className="rounded-full">
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" className="rounded-full">
            4
          </PaginationLink>
        </PaginationItem> */}