import React, { useState } from "react";

const WriteBlog = ({ closeModal, refreshBlogs, addPost }) => {
    const [blogData, setBlogData] = useState({
      title: "",
      description: "",
      image: null,
    });
  
    const handleChange = (e) => {
      setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
  
    const handleImageChange = (e) => {
      setBlogData({ ...blogData, image: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create the new post object
      const newPost = {
        id: Date.now(), // Assuming an auto-generated ID (in real life, you'd get this from the server)
        title: blogData.title,
        description: blogData.description,
        author: "Your Name", // Replace with the logged-in user or any data you want
        image: blogData.image,
      };
  
      try {
        // In real-world, this is where you'd send the blog data to the API.
        // const response = await axios.post("http://localhost:8000/blogs", newPost);
  
        console.log("Blog Data Submitted:", blogData);
  
        // Add the new post to the posts list in the parent component (Explore)
        addPost(newPost); // Add the new blog post
  
        // Close the modal and refresh the blog list
        closeModal();
        refreshBlogs(); // You can call this to get the updated list from the API later
      } catch (error) {
        console.error("Error submitting blog:", error);
      }
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold text-white mb-4">Write a Blog</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>
  
            <div>
              <label className="block text-gray-300 text-sm mb-1">Description</label>
              <textarea
                name="description"
                value={blogData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>
  
            <div>
              <label className="block text-gray-300 text-sm mb-1">Upload Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full text-white"
                accept="image/*"
              />
            </div>
  
            <div className="flex justify-between">
              <button
                type="button"
                onClick={closeModal}
                className="py-2 px-4 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default WriteBlog;