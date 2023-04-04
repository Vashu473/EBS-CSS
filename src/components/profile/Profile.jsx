import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";
import ProfileUpdate from "./ProfileUpdate";
const Profile = () => {
  const { profileData } = useContext(AuthContext);

  const [edit, setEdit] = useState(false);

  const openEditProfileModal = () => {
    return setEdit(true);
  };
  return (
    <section
      style={{
        backgroundColor: "#f4f5f7",
        marginTop: "100px",
        width: "100%",
        minHeight: "550px",
      }}
    >
  
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://www.pngitem.com/pimgs/m/20-208152_student-png-high-school-student-animation-transparent-png.png"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px", margin: "auto" }}
                    />
                    <h5>{`${profileData?.fname} ${profileData?.lname}`}</h5>
                    <p>{profileData?.course}</p>
                    <i className="far fa-edit mb-5" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{profileData?.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{profileData.mobile}</p>
                        </div>
                      </div>
                      <h6>Address</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>State</h6>
                          <p className="text-muted">{profileData.state}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Registration Id</h6>
                          <p className="text-muted">{profileData._id}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <button
                          className="btn btn-primary"
                          onClick={openEditProfileModal}
                        >
                          Edit Profile
                        </button>
                        {edit ? (
                          <ProfileUpdate hide={() => setEdit(false)} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Profile;
