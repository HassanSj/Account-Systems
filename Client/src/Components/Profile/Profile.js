import img from "../../assets/images/white-logo.png";
import image from "../../assets/images/damir-bosnjak.jpg";
import profile from "../../assets/images/mike.jpg";
import "../../assets/css/paper-dashboard.css?v=2.0.1";
import "../../assets/css/bootstrap.min.css";
import "../../assets/demo/demo.css";
function Profile() {
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

              <li>
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
              <li className="active">
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
                  User Profile
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
            <div className="row">
              <div className="col-md-4">
                <div className="card card-user">
                  <div className="image">
                    <img src={image} alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="author">
                      <a href="#">
                        <img
                          className="avatar border-gray"
                          src={profile}
                          alt="..."
                        />
                        <h5 className="title">Chet Faker</h5>
                      </a>
                      <p className="description">@chetfaker</p>
                    </div>
                    <p className="description text-center">
                      "I like the way you work it <br />
                      No diggity <br />I wanna bag it up"
                    </p>
                  </div>
                  <div className="card-footer">
                    <hr />
                    <div className="button-container">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-6 ml-auto">
                          <h5>
                            12
                            <br />
                            <small>Files</small>
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                          <h5>
                            2GB
                            <br />
                            <small>Used</small>
                          </h5>
                        </div>
                        <div className="col-lg-3 mr-auto">
                          <h5>
                            24,6$
                            <br />
                            <small>Spent</small>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card-user">
                  <div className="card-header">
                    <h5 className="card-title">Edit Profile</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-5 pr-1">
                          <div className="form-group">
                            <label>Company (disabled)</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                              placeholder="Company"
                              value="Creative Code Inc."
                            />
                          </div>
                        </div>
                        <div className="col-md-3 px-1">
                          <div className="form-group">
                            <label>Username</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              value="michael23"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 pl-1">
                          <div className="form-group">
                            <label for="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 pr-1">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Company"
                              value="Chet"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 pl-1">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              value="Faker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Home Address"
                              value="Melbourne, Australia"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 pr-1">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                              value="Melbourne"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 px-1">
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Country"
                              value="Australia"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 pl-1">
                          <div className="form-group">
                            <label>Postal Code</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="ZIP Code"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>About Me</label>
                            <textarea className="form-control textarea">
                              Oh so, your weak rhyme You doubt I'll bother,
                              reading into it
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="update ml-auto mr-auto">
                          <button
                            type="submit"
                            className="btn btn-primary btn-round"
                          >
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
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
export default Profile;
