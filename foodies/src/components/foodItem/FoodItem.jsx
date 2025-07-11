import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ name, description, id, imageUrl, price }) => {
  const {token, increaseQty, decreaseQty, quantities} = useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
      <div
        className="card center "
        style={{ maxWidth: "320px", textDecoration: "none" }}
      >
        <Link to={`/food/${id}`}>
          <img
            src={imageUrl}
            width={"98%"}
            height={160}
            className="align-self-center"
            alt="Product Image"
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">&#8377;{price}.00</span>
            <div>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <small className="text-muted">(4.5)</small>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light">
          <Link className="btn btn-primary btn-sm" to={`/food/${id}`}>
            View Food
          </Link>

          {quantities[id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-danger btn-sm" onClick={()=> token? decreaseQty(id) : navigate('/login')}>
                <i className="bi bi-dash-circle"></i>
                <span className="fw-bold">{quantities[id]}</span>
              </button>
              <button className="btn btn-success btn-sm" onClick={() => token? increaseQty(id) : navigate('/login')}>
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => token? increaseQty(id) : navigate('/login')}>
              <i className="bi bi-plus-circle"></i>
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
