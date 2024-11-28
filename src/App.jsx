import { useLoaderData } from "react-router-dom";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <>
      <div className="container mx-auto px-3">
        <h1>All Coffee</h1>
      </div>
    </>
  );
}

export default App;
