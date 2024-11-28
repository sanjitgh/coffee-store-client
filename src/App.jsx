import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const lodededCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(lodededCoffee);

  return (
    <>
      <div className="container mx-auto px-3 py-20">
        <h1 className="text-5xl font-bold mb-10 text-center">
          Hot & Cold Coffee({coffees.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
