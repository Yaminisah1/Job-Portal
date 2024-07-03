import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Creating an account typically refers to the process of registering yourself or a business with a service or platform. This involves providing necessary information such as your name, email address, and often a password. Once registered, you usually gain access to personalized features, settings, or content on that platform.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              "Finding a job" entails actively searching and applying for suitable employment opportunities that match one's qualifications and career goals, whereas "posting a job" involves creating and advertising an open position to attract qualified candidates who fit the job requirements..
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              "Applying for a job" involves submitting tailored resumes and cover letters to specific job openings. "Recruiting suitable candidates" entails identifying job requirements, sourcing potential hires, screening applicants, conducting interviews, and selecting the best fit for the position..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;