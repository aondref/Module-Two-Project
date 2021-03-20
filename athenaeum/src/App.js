import './App.css';

function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <h2>Athenaeum</h2>
        <h3>Welcome to Athenaeum</h3>
        <form>
          <label>Username</label>
          <input type="text" name="name" placeholder="UserName" />
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
}

export default App;
