import img from "../../assets/images/white-logo.png";
import "../../assets/css/paper-dashboard.css?v=2.0.1";
import "../../assets/css/bootstrap.min.css";
import "../../assets/demo/demo.css";
function Sales() {
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
              <li className="active">
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
                  Sales
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
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="text-primary">
                          <th>Name</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Brand</th>
                          <th>Total Items</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td className="text-right">$36,738</td>
                          </tr>
                          <tr>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td className="text-right">$23,789</td>
                          </tr>
                          <tr>
                            <td>Sage Rodriguez</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                            <td className="text-right">$56,142</td>
                          </tr>
                          <tr>
                            <td>Philip Chaney</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                            <td className="text-right">$38,735</td>
                          </tr>
                          <tr>
                            <td>Doris Greene</td>
                            <td>Malawi</td>
                            <td>Feldkirchen in Kärnten</td>
                            <td className="text-right">$63,542</td>
                          </tr>
                          <tr>
                            <td>Mason Porter</td>
                            <td>Chile</td>
                            <td>Gloucester</td>
                            <td className="text-right">$78,615</td>
                          </tr>
                          <tr>
                            <td>Jon Porter</td>
                            <td>Portugal</td>
                            <td>Gloucester</td>
                            <td className="text-right">$98,615</td>
                          </tr>
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
export default Sales;
