import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import Postpagination from "@/components/common/Postpagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchPosts } from "@/context/postsActions";
import { PostsContext } from "@/context/PostsContext";
import { Plus, ScrollText, Search } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Posts = () => {
  const { loading, error, currentPage, postsPrepage, filteredPosts, dispatch } =
    useContext(PostsContext);

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);
  
  
  const totalPages = Math.ceil(filteredPosts.length / postsPrepage);
  
  const indexOflastPost = currentPage * postsPrepage;
  const indexOffirstpost = indexOflastPost - postsPrepage;
  const currentPosts = filteredPosts.slice(indexOffirstpost, indexOflastPost);
  console.log("filteredPosts:", filteredPosts);
console.log("currentPosts:", currentPosts);

  return (
    <div className="mt-4">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-center text-red-500">Error: {error}</div>
      ) : (
        <Container>
          <Card className="overflow-hidden border bg-white/70 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between py-2 bg-white border-b">
              <CardTitle className="flex items-center gap-2 ">
                <ScrollText />
                Post List
              </CardTitle>
              <NavLink to="/createpost">
                <Button variant="ghost" className="flex items-center text-sm">
                  <Plus /> <span>Create a new post</span>
                </Button>
              </NavLink>
            </CardHeader>

            <CardContent className="mt-4">
              {/* Search Text */}
              <div className="flex items-center justify-between gap-6 pb-4 border-b">
                <div className="relative flex-1">
                  <Input
                    onChange={(e) =>
                      dispatch({
                        type: "SET_SEARCH",
                        payload: e.target.value,
                      })
                    }
                    placeholder="Search for a post..."
                    className="rounded-full outline-none ps-10"
                  />
                  <Search
                    size={16}
                    className="absolute -translate-y-1/2 top-1/2 left-3"
                  />
                </div>

                {/* Search Author */}
                <div className="flex items-center gap-2 ">
                  <span>Author: </span>
                  <Select
                    onValueChange={(value) =>
                      dispatch({
                        type: "SET_AUTHOR",
                        payload: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="1">Author 1</SelectItem>
                      <SelectItem value="2">Author 2</SelectItem>
                      <SelectItem value="3">Author 3</SelectItem>
                      <SelectItem value="4">Author 4</SelectItem>
                      <SelectItem value="5">Author 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 divide-y ">
                {/* {
                Array.from({length:8}).map((_,i)=> (
                  <div key={i} className="p-2 rounded-md cursor-pointer hover:bg-gray-50"> 
                  <NavLink to={`/postdatils/${i+1}`} >
                  <p className="p-2 text-sm font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, expedita!</p>
                  </NavLink>
                  </div>
                  ))
                  } */}

                {currentPosts.map((post) => (
                  
                  
                  <div
                    key={post.id}
                    className="p-2 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <NavLink to={`/postdatils/${post.id}`}>
                      <p className="p-2 text-sm font-medium ">{post.title}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            </CardContent>
            {/* Pagination (UI only) */}
            <div className="p-2 bg-white">
              <Postpagination
                totalPages={totalPages}
                currentPage={currentPage}
                dispatch={dispatch}
              />
            </div>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default React.memo(Posts);
