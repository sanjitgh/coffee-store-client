import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handelSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const image = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      image,
    };

    // send data to the server
    fetch('https://coffee-store-server-coral-nine.vercel.app/coffee', {
      method: 'POST',
      headers:{
        'content-type' : 'application/json',
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Successfull!',
          text: 'Your order is successfully done!',
          icon: 'success',
          confirmButtonText: 'Close'
        })
        form.reset();
      }
    })
  };
  return (
    <div className="container mx-auto ">
      <h1 className="text-yellow-800 text-5xl mb-5 text-center my-8">
        Add Coffee
      </h1>
      <form
        onSubmit={handelSubmit}
        className="bg-yellow-950 bg-opacity-5 flex justify-center items-center p-10 max-w-[650px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            name="chef"
            type="text"
            placeholder="Chef"
            className="input input-bordered w-full"
          />
          <input
            name="supplier"
            type="text"
            placeholder="Supplier"
            className="input input-bordered w-full"
          />
          <input
            name="taste"
            type="text"
            placeholder="Taste"
            className="input input-bordered w-full"
          />
          <input
            name="category"
            type="text"
            placeholder="Category"
            className="input input-bordered w-full"
          />
          <input
            name="details"
            type="text"
            placeholder="Details"
            className="input input-bordered w-full"
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full md:col-span-2 col-span-1"
          />
          <div className="md:col-span-2">
            <input
              className="btn btn-block bg-yellow-800 hover:bg-yellow-900 text-white"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
