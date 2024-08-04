"use client";

import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    async function getData() {
      "use server";

      const res = await fetch("https://dummyjson.com/products");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      console.log(res.json());
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
