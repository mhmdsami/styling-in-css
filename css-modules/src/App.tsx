import styles from './App.module.css'
import posts from './posts'

function App() {
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.card}>
          <div className={styles.meta}>
            <div className={styles.title}>{post.title}</div>
            <div>{post.author}, {post.date}</div>
          </div>
          <img className={styles.image} alt={post.title} src={post.image} />
          <div className={styles.content}>{post.content}</div>
        </div>
      ))}
    </div>
  )
}

export default App
