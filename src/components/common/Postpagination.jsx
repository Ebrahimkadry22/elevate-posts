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
  <PaginationContent className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">

    {/* First */}
    <PaginationItem>
      <PaginationLink
        onClick={() => dispatch({ type: "SET_PAGE", payload: 1 })}
        className={`p-2 sm:p-3 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <ChevronsLeft size={18} />
      </PaginationLink>
    </PaginationItem>

    {/* Prev */}
    <PaginationItem>
      <PaginationLink
        onClick={() =>
          dispatch({ type: "SET_PAGE", payload: currentPage - 1 })
        }
        className={`p-2 sm:p-3 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <ChevronLeft size={16} />
      </PaginationLink>
    </PaginationItem>

   
    <div className="hidden gap-1 md:flex">
      {pages.map((p) => (
        <PaginationItem key={p}>
          <PaginationLink
            onClick={() =>
              dispatch({ type: "SET_PAGE", payload: p })
            }
            isActive={currentPage === p}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm
              ${
                currentPage === p
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {p}
          </PaginationLink>
        </PaginationItem>
      ))}
    </div>

    {/* Next */}
    <PaginationItem>
      <PaginationLink
        onClick={() =>
          dispatch({ type: "SET_PAGE", payload: currentPage + 1 })
        }
        className={`p-2 sm:p-3 ${
          currentPage === totalPages
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
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
        className={`p-2 sm:p-3 ${
          currentPage === totalPages
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
      >
        <ChevronsRight size={18} />
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