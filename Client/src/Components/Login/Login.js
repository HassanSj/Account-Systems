import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import img from "../../assets/images/accounts.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const styles = {
  code: {
    color: "blue",
    cursor: "pointer",
  },
  cards: {
    borderRadius: "25px",
    width: "706px",
    backgroundColor: "rgb(202, 216, 229)",
    height: "394px",
  },
  logimg: {
    marginTop: "23px",
  },
};
function Login() {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const Navigate = useNavigate();
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }
  function redirect() {
    Navigate("/register");
  }

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5 cards" style={styles.cards}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                style={{ marginTop: "74px" }}
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>
                <form onSubmit={loginUser}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Email"
                      id="form2"
                      type="email"
                      value={email}
                      className="form-control form-control-lg"
                      onChange={(e) => getEmail(e.target.value)}
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      value={password}
                      className="form-control form-control-lg"
                      onChange={(e) => getPassword(e.target.value)}
                      placeholder="Enter your Password"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <p>
                      Dont have an account{" "}
                      <span
                        className="code"
                        onClick={redirect}
                        style={styles.code}
                      >
                        Register here
                      </span>
                    </p>
                  </div>

                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    type="submit"
                    value="Login"
                  >
                    Login
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  className="logimg"
                  style={styles.logimg}
                  src={img}
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        <Footer />
      </MDBContainer>
    </>
  );
}

export default Login;
