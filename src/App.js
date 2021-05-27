import './App.css';
import { useHarperDB } from 'use-harperdb';

function App() {
  const [data, loading, error, refresh] = useHarperDB({
    query: { operation: 'sql', sql: `select * from blog.blogs` },
    interval: 50000,
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Programming Blogs</h1>
        <button onClick={refresh}>Refresh</button>
        {data ? (
          <table>
          <thead>
            <tr>
              <td>Blog</td>
              <td>Author</td>
              <td>Website</td>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.blog}</td>
                  <td>{row.author}</td>
                  <td><a href={row.website}>{row.website}</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        ) : error ? (
          <div style={{ color: 'red' }}>Error: {error || 'false'}</div>
        ) : (
          <div>Loading...</div>
        )}
        
      </header>
      <footer>
        Demo built to showcase HarperDB and React. Visit <a href="https://lo-victoria.com">lo-victoria.com</a> to read tutorial.
      </footer>
    </div>
  );
}

export default App;
