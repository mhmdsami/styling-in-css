import posts from './posts'
import styled from "styled-components";

function App() {
  const Container = styled.div`
    margin: 48px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Card = styled.div`
    background-color: #DFE0DC;
    padding: 20px;
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
  `;

  const Meta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 14px;
  `;

  const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
  `;

  const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  `;

  const Content = styled.div`
    font-size: 16px;
  `;

  return (
    <Container>
      {posts.map(post => (
        <Card>
          <Meta>
            <Title>{post.title}</Title>
            <div>{post.author}, {post.date}</div>
          </Meta>
          <Image alt={post.title} src={post.image} />
          <Content>{post.content}</Content>
        </Card>
      ))}
    </Container>
  )
}

export default App
