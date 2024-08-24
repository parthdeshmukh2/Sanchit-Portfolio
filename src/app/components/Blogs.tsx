import BlogCard from "./BlogsCard";
const blogs = [
  {
    image: 'https://images.unsplash.com/photo-1636152147367-584ff3e3b694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnMlMjBibG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Blog Title 1',
    description: 'This is a detailed description of the blog post. It can be quite lengthy and will be truncated if it exceeds 50 words.',
  },
  {
    image: 'https://images.unsplash.com/photo-1596144241742-a54dffcc9b26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnMlMjBibG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Blog Title 2',
    description: 'This is a detailed description of the blog post. It can be quite lengthy and will be truncated if it exceeds 50 words.',
  },
  {
    image: 'https://images.unsplash.com/photo-1666214280429-d3985e2ef0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9ycyUyMGJsb2dzfGVufDB8fDB8fHww',
    title: 'Blog Title 3',
    description: 'This is a detailed description of the blog post. It can be quite lengthy and will be truncated if it exceeds 50 words.',
  },
  {
    image: 'https://images.unsplash.com/photo-1596354762473-6706bf6d5626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9ycyUyMGJsb2dzfGVufDB8fDB8fHww',
    title: 'Blog Title 4',
    description: 'This is a detailed description of the blog post. It can be quite lengthy and will be truncated if it exceeds 50 words.',
  }
];

const Blogs = () => {
  return (
    <div className="container mx-auto py-8 cursor-pointer bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
