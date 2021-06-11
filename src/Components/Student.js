import React from "react";
import { useState } from "react";
const Student = (props) => {
  const { city, company, firstName, grades, lastName, pic, skill, email } =props.student;
  const data = grades;
  const newGrade = data.map((i) => Number(i));
  //console.log(newGrade)
  const sum = newGrade.reduce((a, b) => a + b, 0);
  const Average = sum / newGrade.length;
  //console.log(Average);

  const [show, setShow] = useState(false);
  

  const toggle = () => {
    setShow(!show);
  };

 

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5">
            <div className="col-md-12 col-lg-10 col-11 mx-auto mb-md-0 mb-5 shadow">
              <div className="row">
                <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow">
                  <img src={pic} className="img-fluid" alt="student" />
                </div>
                <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                  <div className="row">
                    <div className="col-6">
                      <h3 className="mb-2 st_name">
                        {firstName} {lastName}
                      </h3>
                      <p>Email:{email}</p>
                      <p>Company: {company}</p>
                      <p>Skill: {skill}</p>
                      <p>Average: {Average}%</p>
                    </div>
                    {
                      props.storeTags.map(store => <li> {store.tagData}</li>)
                    }
                    <div>
                      <form onSubmit={props.submitForm}>
                        <input type="text" name="" id="" value={props.tagName} onChange={props.tag} />
                      </form>
                    </div>
                    <div className="col-6">
                      <div className=" d-flex justify-content-end">
                        <button onClick={toggle}>
                          {show ? "minus" : "plus"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {show ? (
                      <div className="col-md-10">
                        <ul className="list-group mb-5">
                          {data.map((dt, index) => (
                            <li key={index} className="list-group-item">    
                              <span className="p-5">Test{index + 1}</span>
                              {dt}%
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
