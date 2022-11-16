import { useState, useEffect } from "react";
import img from "../../assets/images/white-logo.png";
import "../../assets/css/paper-dashboard.css?v=2.0.1";
import "../../assets/css/bootstrap.min.css";
import "../../assets/demo/demo.css";

function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://localhost:1337/products/getproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const deleteuser = async (id) => {
    const res2 = await fetch(
      `http://localhost:1337/products/deleteuser/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      // setDLTdata(deletedata)
      getdata();
    }
  };
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        quantity,
        category,
        brand,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Product Added");
      window.location.href = "/products";
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">
            <a
              href="https://www.creative-tim.com"
              className="simple-text logo-mini"
            >
              <div className="logo-image-small">
                <img src={img} />
              </div>
            </a>
            <a
              href="https://www.creative-tim.com"
              className="simple-text logo-normal"
            >
              Accounts System
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li>
                <a href="/dashboard">
                  <i className="nc-icon nc-bank"></i>
                  <p>Dashboard</p>
                </a>
              </li>

              <li className="active">
                <a href="/products">
                  <i className="nc-icon nc-book-bookmark"></i>
                  <p>Products</p>
                </a>
              </li>
              <li>
                <a href="/categories">
                  <i className="nc-icon nc-bullet-list-67"></i>
                  <p>Categories</p>
                </a>
              </li>
              <li>
                <a href="/brands">
                  <i className="nc-icon nc-tag-content"></i>
                  <p>Brands</p>
                </a>
              </li>
              <li>
                <a href="/sales">
                  <i className="nc-icon nc-cart-simple"></i>
                  <p>Sales</p>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <i className="nc-icon nc-single-02"></i>
                  <p>User Profile</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a className="navbar-brand" href="javascript:;">
                  Products
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              ></div>
            </div>
          </nav>

          <div className="content">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Product</h4>
              </div>
              <form onSubmit={registerUser}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="form-group">
                        <label>Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="form-group">
                        <label>Product Price</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 pl-1">
                      <div className="form-group">
                        <label>Product Quantity</label>

                        <input
                          type="number"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                          className="form-control"
                          placeholder="Enter Quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 px-1">
                    <div className="form-group">
                      <label for="brand">Brand</label>
                      <select
                        name="brand"
                        id="brand"
                        className="form-select"
                        placeholder="choose brand"
                        autoFocus
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        <option value="savemart">SaveMart</option>
                        <option value="imtiaz">Imtiaz</option>
                        <option value="metro">Metro</option>
                        <option value="dominos">Dominos</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        className="form-select"
                        placeholder="choose category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="food">Food</option>
                        <option value="beverages">Beverages</option>
                        <option value="crockery">Crockery</option>
                        <option value="automobiles">AutoMobiles</option>
                        <option value="medicine">Medicine</option>
                        <option value="clothes">Clothing</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="update ml-auto mr-auto">
                      <button
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-round"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Products Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead
                          className="text-primary"
                          style={{ fontSize: "large" }}
                        >
                          <th>Id</th>
                          <th>Product Name</th>
                          <th>Product Price</th>
                          <th>Product Category</th>
                          <th>Product Quanity</th>
                          <th>Brand</th>
                          <th>Action</th>
                        </thead>
                        <tbody style={{ fontSize: "large" }}>
                          {getuserdata.map((element, id) => {
                            return (
                              <>
                                <tr>
                                  <th scope="row">{id + 1}</th>
                                  <td>{element.name}</td>
                                  <td>{element.price}</td>
                                  <td>{element.category}</td>
                                  <td>{element.quantity}</td>
                                  <td>{element.brand}</td>

                                  <td>
                                    <p>
                                      <button
                                        href="#"
                                        class="text-decoration-none"
                                        style={{
                                          color: "red",
                                          border: "none",
                                          backgroundColor: "transparent",
                                        }}
                                        onClick={() => deleteuser(element._id)}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-trash"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                          <path
                                            fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                          ></path>
                                        </svg>
                                      </button>
                                    </p>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-black footer-white">
            <div className="container-fluid">
              <div className="row">
                <div className="credits ml-auto">
                  <span className="copyright">
                    ©<script>document.write(new Date().getFullYear());</script>,
                    made with <i className="fa fa-heart heart"></i> by Texinity
                    Technologies
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Products;
