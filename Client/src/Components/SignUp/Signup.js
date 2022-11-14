import React, { useEffect } from "react";
import { useState } from "react";
import decode from "jwt-decode";
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
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/accounts.png";
import Footer from "../Footer/Footer";
function Signup() {
  const Navigate = useNavigate();
  const styles = {
    code: {
      color: "blue",
      cursor: "pointer",
    },
  };
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleResponse(response) {
    console.log("Encoded token is" + response.credential);
    var data = decode(response.credential);
    setUser(data);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "655188641396-uvajoco6ndajf2gfs8a2rvret0od69b6.apps.googleusercontent.com",
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Thanks for Joining Us Hold Up Redirecting to Dashboard");
      window.location.href = "/dashboard";
    }
  }
  function redirect() {
    Navigate("/");
  }
  return (
    <MDBContainer>
      <img src={user.picture}></img>
      <h1>{user.name}</h1>
      <MDBCard
        className="text-black m-5"
        style={{
          borderRadius: "25px",
          width: "764px",
          backgroundColor: "#cad8e5",
        }}
      >
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>
              <form onSubmit={registerUser}>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* <MDBInput className='mb-4' size='lg' type='submit' value="Register" /> */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <p>
                    have an account{" "}
                    <span
                      className="code"
                      onClick={redirect}
                      style={styles.code}
                    >
                      Login here
                    </span>
                  </p>
                </div>
                <MDBBtn
                  type="submit"
                  value="Register"
                  className="mb-4"
                  size="lg"
                  style={{ marginLeft: "57px" }}
                >
                  Register
                </MDBBtn>
                <div
                  id="google"
                  style={{ marginLeft: "28px", marginTop: "-16px" }}
                ></div>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage src={img} fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <Footer />
    </MDBContainer>
  );
}

export default Signup;
