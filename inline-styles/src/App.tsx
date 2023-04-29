import posts from './posts'

function App() {
  return (
    <div style={{
      margin: '48px',
      display: 'grid',
      gap: '24px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {posts.map(post => (
        <div style={{
          backgroundColor: '#DFE0DC',
          padding: '20px',
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderRadius: '8px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            fontSize: '14px',
          }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>{post.title}</div>
            <div>{post.author}, {post.date}</div>
          </div>
          <img style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
          }} alt={post.title} src={post.image} />
          <div style={{ fontSize: '16px' }}>{post.content}</div>
        </div>
      ))}
    </div>
  )
}

export default App
