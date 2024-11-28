import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, image, chef, details, category, taste, supplier } = coffee;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="flex justify-between items-center p-5 gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="card-title">Name: {name}</h2>
          <span>Chef: {chef}</span>
          <span>Category: {category}</span>
          <span>Details: {details}</span>
          <span>Taste: {taste}</span>
          <span>Supplier: {supplier}</span>
        </div>
        <div>
          <div className="join join-vertical space-y-3">
            <button className="btn ">
              <FaEye />
            </button>
            <Link to={`/updateCoffee/${_id}`} className="btn ">
              <FaRegEdit />
            </Link>
            <button
              onClick={() => handelDelete(_id)}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
