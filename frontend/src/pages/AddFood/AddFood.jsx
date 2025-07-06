import React, { useState } from "react";
import { assets } from "./../../assets/assets";
import {addFood} from "../../services/foodService.js";
import {toast} from "react-toastify";

const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    try {
      await addFood(data, image);
      toast.success("Food added successfully.");

      // Reset form
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Biryani'
      });
      setImage(null);
    } catch (e) {
      toast.error("Error adding food.");
      console.error(e); // Helpful for debugging
    }
  };
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-3">Add Food text</h2>
            <form onSubmit={onSubmitHandler} >
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="upload image"
                    width={80}
                    height={80}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  // required
                  hidden
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Write content here"
                  id="description"
                  rows="2"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="Biryani">Biryani</option>
                  <option value="Cake">Cake</option>
                  <option value="Biryani">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder='₹200'
                  id="price"
                  required
                  name="price"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
