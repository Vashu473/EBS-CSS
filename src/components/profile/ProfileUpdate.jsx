import React, { useContext, useState } from "react";
import { patchFetch } from "../api/NormalApi";
import { AuthContext } from "../context/AuthContext";

const ProfileUpdate = ({ hide }) => {
  const { callProfileData, profileData } = useContext(AuthContext);
  console.log(profileData);
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
    maxHeight: "100%",
  };

  const [hide1, setHide1] = useState(false);

  const [dataa, setData] = useState({
    fname: profileData?.fname,
    lname: profileData?.lname,
    mobile: profileData?.mobile,
    password: profileData?.password,
  });

  const handleChange = (e) => {
    setData({ ...dataa, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setHide1(true);
      const res = await patchFetch("user/updateProfile", dataa);
      console.log(res);
      if (res.success == true) {
        setHide1(false);
        alert("user updated successfully");
        callProfileData();
        hide();
      }
      if (res) {
        setHide1(false);
      }
    } catch (error) {
      return error;
    }
  };
  // setData({
  //   fname: profileData?.fname,
  //   lname: profileData?.lname,
  //   mobile: profileData?.mobile,
  // });
  return (
    <div>
      <div
        className="modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={modalStyle}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit profile
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={hide}
                style={{
                  backgroundColor: "black",
                  color: "White",
                }}
                placeholder="close"
              >
                <div style={{ fontSize: "12px" }}>X</div>
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="form"
            >
              <div class="form-group m-4">
                <label class="form">Update Your fname</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter Your FName"
                  rows="1"
                  name="fname"
                  value={dataa.fname}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div class="form-group m-4">
                <label class="form">Update Your lname</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter Your LName"
                  rows="1"
                  name="lname"
                  value={dataa.lname}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div class="form-group m-4">
                <label class="form">Update Your mobile</label>
                <textarea
                  type="Number"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter Your Mobile Number"
                  rows="1"
                  name="mobile"
                  value={dataa.mobile}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div class="form-group m-4">
                <label class="form">Update Your password</label>
                <textarea
                  type="password"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter Your Mobile Number OR continue with same number"
                  rows="1"
                  name="password"
                  value={dataa.password}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <p className="d-flex justify-content-center">
                {hide1 ? <span>Please wait...</span> : ""}
              </p>
              <button
                type="submit"
                className="btn btn-primary btn-block m-4"
                style={{ display: hide1 ? "none" : "", color: "black" }}
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileUpdate);
