import { useEffect } from "react";
import "./App.css";
import { Card } from "./components/Base/Card";
import Input from "./components/Base/Input";

const mockCardData = [
  {
    header: "Card Header 1",
    content: "Card content 1",
  },
  {
    header: "Card Header 2",
    content: "Card content 2",
  },
  {
    header: "Card Header 3",
    content: "Card content 3",
  },
];

const searchIndex = () => {
  const dataArray = Array.from({ length: 10000000000 }, (_, i) => i);
  const isFound = dataArray.find((item) => item === 10000000000);
  return isFound;
};

function App() {
  useEffect(() => {
    searchIndex();
  }, []);
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
        {mockCardData.map((card) => (
          <Card key={card.header} header={card.header}>
            <p>{card.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
