import Post from "../post/Post";
import "./posts.scss";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then(res => {
      return res.data;
    })
  });


  return <div className="posts">
    { error 
    ? "Posting not working!" 
    : isLoading 
    ? "loading" 
    : data.map(post=> <Post post={post} key={post.id}/> )}
  </div>;
};

export default Posts;
