import posts from './posts'

function App() {
  return (
    <div>
      {posts.map(post => (
        <div>
          <div>
            <div>{post.title}</div>
            <div>{post.author}, {post.date}</div>
          </div>
          <img alt={post.title} src={post.image} />
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  )
}

export default App
