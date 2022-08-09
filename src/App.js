import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo1'
      },
      {
        id: 2,
        title: 'O título 1',
        body: 'O corpo1'
      },
      {
        id: 3,
        title: 'O título 1',
        body: 'O corpo1'
      }
    ]
  };

  handlePClick = () => {
    this.setState({ name: 'Jr' });
  }

  handleAClick = (e) => {
    e.preventDefault();

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });

  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
