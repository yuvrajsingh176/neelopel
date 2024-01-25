import { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ data, handleModal, handleSubmit, id }) => {
  const carddata = data.filter((data) => data.id === id)[0];
  const [name, setName] = useState(carddata.name || "");
  const [email, setEmail] = useState(carddata.email || "");
  const [number, setNumber] = useState(carddata.phone || "");
  const [website, setWebsite] = useState(carddata.url || "");
    const [validEmail, setValidEmail] = useState(false);
    const checkemail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValidEmail = emailRegex.test(email);

    setValidEmail(isValidEmail);
        };
    useEffect(() => {
    
        checkemail(email)
    },[email])


  useEffect(() => {
    setName(carddata.name || "");
    setEmail(carddata.email || "");
    setNumber(carddata.phone || "");
    setWebsite(carddata.url || "");
  }, [carddata]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
              <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div className="title" >
                  <p>Basic Modal</p>
                  </div>
<button style={{backgroundColor:"white",color:"black",border:"none",outline:"none"}}>X</button>
              </div>
              <div style={{ height: "1px", backgroundColor: "black" }}></div>
        <div className="bd">
          <form
            action="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="modal-contents">
              <label htmlFor="" style={{ marginRight: "14px" }}>
                Name:
              </label>
              <div>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className={`${name ? "input-width" : "input-width empty"}`}
                  type="text"
                  id="username"
                  name="username"
                  required
                />
                <div>
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {name.length === 0 ? "Name field cannot be empty" : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-contents">
              <label htmlFor="" style={{ marginRight: "19px" }}>
                Email:
              </label>
              <div>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className={`${email ? "input-width" : "input-width empty"}`}
                  type="text"
                  id="email"
                  name="email"
                  required
                />
                <div>
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                                      {email.length === 0 ? "Email field cannot be empty" : ""}
                                      
                                      {email.length > 0 && (
                                          validEmail ? "":"Email is not valid"
                                      )}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-contents">
              <label htmlFor="" style={{ marginRight: "12px" }}>
                Phone:
              </label>
              <div>
                <input
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  value={number}
                  className={`${number ? "input-width" : "input-width empty"}`}
                  type="text"
                  id="email"
                  name="email"
                  required
                />
                <div>
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {number.length === 0 ? "Number field cannot be empty" : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-contents">
              <label htmlFor="" style={{ marginRight: "2px" }}>
                Website:
              </label>
              <div>
                <input
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                  value={website}
                  className={`${website ? "input-width" : "input-width empty"}`}
                  type="text"
                  id="website"
                  name="website"
                  required
                />
                <div>
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {website.length === 0
                      ? "Website field cannot be empty"
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div style={{ height: "0.5px", backgroundColor: "black" }}></div>
        <div className="footer">
          <button
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (name && email && number && website && validEmail) {
                handleSubmit(name, email, number, website);
                handleModal();
              }
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
