import img from "../../assets/images/white-logo.png";
import "../../assets/css/paper-dashboard.css?v=2.0.1";
import "../../assets/css/bootstrap.min.css";
import "../../assets/demo/demo.css";
function Dashboard() {
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
              <li className="active">
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
                  Dashboard
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
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-globe text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Products</p>
                          <p className="card-title">15000</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o"></i>
                        Yesterday
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-money-coins text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Total Sales</p>
                          <p className="card-title">$ 1,345</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-calendar-o"></i>
                      Last day
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Total Customers</p>
                          <p className="card-title">23</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-clock-o"></i>
                      Yesterday
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">Brands</p>
                          <p className="card-title">10</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-refresh"></i>
                      Last Day
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Users Behavior</h5>
                    <p className="card-category">24 Hours performance</p>
                  </div>
                  <div className="card-body">
                    <canvas id="chartHours" width="400" height="100"></canvas>
                  </div>
                  <div className="card-footer">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-history"></i> Updated 3 minutes ago
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
export default Dashboard;
