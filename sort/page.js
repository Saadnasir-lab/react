import { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([
    { name: "A", amount: 200 },
    { name: "B", amount: 500 },
    { name: "C", amount: 100 }
  ]);

  const sortByAmountDesc = () => {
    // Create a copy to avoid mutating the original state directly
    const sorted = [...data].sort((a, b) => b.amount - a.amount);
    setData(sorted);
  };

  return (
    <div>
      <button onClick={sortByAmountDesc}>Sort by Amount (Desc)</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.amount}</li>
        ))}
      </ul>
    </div>
  );
}
