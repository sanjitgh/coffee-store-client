import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  const { _id, name, image, chef, details, category, taste, supplier } = coffees;

  const handelUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const image = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      image,
    };

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfull!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto px-3 py-20">
      <h1 className="font-bold text-5xl text-center mb-10">
        Update coffee: {name}
      </h1>

      <form
        onSubmit={handelUpdateCoffee}
        className="bg-yellow-950 bg-opacity-5 flex justify-center items-center p-10 max-w-[650px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <input
            name="name"
            type="text"
            defaultValue={name}
            className="input input-bordered w-full"
          />
          <input
            name="chef"
            type="text"
            defaultValue={chef}
            className="input input-bordered w-full"
          />
          <input
            name="supplier"
            type="text"
            defaultValue={supplier}
            className="input input-bordered w-full"
          />
          <input
            name="taste"
            type="text"
            defaultValue={taste}
            className="input input-bordered w-full"
          />
          <input
            name="category"
            type="text"
            defaultValue={category}
            className="input input-bordered w-full"
          />
          <input
            name="details"
            type="text"
            defaultValue={details}
            className="input input-bordered w-full"
          />
          <input
            name="photo"
            type="text"
            defaultValue={image}
            className="input input-bordered w-full md:col-span-2 col-span-1"
          />
          <div className="md:col-span-2">
            <input
              className="btn btn-block bg-yellow-800 hover:bg-yellow-900 text-white"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
