import posts from './posts'

function App() {
  return (
    <div className="m-12 gap-6 flex flex-col justify-center items-center">
      {posts.map(post => (
        <div className="flex flex-col bg-[#DFE0DC] p-5 w-[30vw] gap-4 rounded-lg">
          <div className="flex flex-col gap-0.5 text-sm">
            <div className="text-xl font-bold">{post.title}</div>
            <div>{post.author}, {post.date}</div>
          </div>
          <img className="w-full h-[200px] object-cover rounded-lg" alt={post.title} src={post.image} />
          <div className="text-base">{post.content}</div>
        </div>
      ))}
    </div>
  )
}

export default App;
