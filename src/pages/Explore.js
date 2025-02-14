import React, { useState, useEffect } from "react";
import axios from "axios";
import WriteBlog from "./WriteBlog";
import blog1 from '../assets/1739164344888.jpeg';
import blog2 from '../assets/download (1).jpeg';
import blog3 from '../assets/download.jpeg';

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dummyPosts = [
        {
          id: 1,
          title: "AI Trends 2025",
          description: "Exploring AI advancements and their impact on society.",
          author: "Premkumar",
          image: blog1,
        },
        {
          id: 2,
          title: "Cloud Computing",
          description: "Latest trends in AWS, GCP, and Azure for 2025.",
          author: "John Doe",
          image: blog2,
        },
        {
          id: 3,
          title: "React vs Vue",
          description: "Comparing React.js and Vue.js for front-end development.",
          author: "Jane Smith",
          image: blog3,
        },
      ];
      setPosts(dummyPosts);
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/blogs");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the front of the list
  };

  return (
    <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search blogs..."
            className="p-3 border border-gray-600 rounded-lg w-72 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Write Blog
          </button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <img src={post.authorPhoto || "https://via.placeholder.com/40"} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
              <span className="text-gray-300 font-medium">{post.author}</span>
            </div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            {post.image && <img src={post.image} alt="Blog" className="mt-2 rounded-lg w-full" />}
            <p className="text-gray-400 mt-2">{post.description}</p>
          </div>
        ))}
      </div>

      {/* Write Blog Modal */}
      {isModalOpen && <WriteBlog closeModal={() => setIsModalOpen(false)} refreshBlogs={fetchBlogs} addPost={addPost} />}
    </div>
  );
};

export default Explore;