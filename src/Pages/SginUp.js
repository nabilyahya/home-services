import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const SginUp = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-6"
            style={{ backgroundColor: "green", height: "100vh" }}
          >
            <div class="d-flex flex-column align-items-center justify-content-center h-100">
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <br />
              <Link to="/CustomerSginUp">
                <div>
                  <button>Sign In As Customer</button>
                </div>
              </Link>
            </div>
          </div>
          <div
            class="col-md-6"
            style={{ backgroundColor: "gray", height: "100vh" }}
          >
            <div class="d-flex flex-column align-items-center justify-content-center h-100">
              <div>
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <br />
              <Link to="/WorkerSginUp">
                <div>
                  <button>Sign In As Worker</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SginUp;
