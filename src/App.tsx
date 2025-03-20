import "./App.css";
import Input from "./components/Base/Input";

function App() {
  return (
    <div className="app-container">
      <div className="small-container">
        <Input
          label="Username"
          required
          placeholder="Enter your username"
          onChange={(value) => console.log(value)}
          helperText="Username must be at least 3 characters"
        />
      </div>
    </div>
  );
}

export default App;
