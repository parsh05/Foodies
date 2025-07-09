import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchFoodDetails } from "../../service/foodService";
import { StoreContext } from './../../context/StoreContext';

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {increaseQty} = useContext(StoreContext);

  const [data, setData] = useState({});

  useEffect(() => {
    const loadFoodDetails = async () => {
      try {
        const foodData = await fetchFoodDetails(id);
        setData(foodData);
      } catch (error) {
        toast.error("Failed while displaying food details");
        console.log(error);
      }
    };

    loadFoodDetails();
  }, [id]);


  const addToCart = () => {
    increaseQty(data.id)
    navigate('/cart')
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={data.imageUrl}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">Category: 
                <span className="badge text-bg-warning" style={{"margin":"4px"}}> {data.category}</span>
                </div>
            <h1 className="display-5 fw-bolder">{data.name}</h1>
            <div className="fs-5 mb-5">
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <span>&#8377;{data.price}.00</span>
            </div>
            <p className="lead">
              {data.description}
            </p>
            <div className="d-flex">
              {/* <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                style={{ maxWidth: "3rem" }}
              /> */}
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
                onClick={addToCart}
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
