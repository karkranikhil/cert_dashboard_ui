import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Selectbox from "./Components/Selectbox/Selectbox";
import Spinner from './Components/Spinner/index'
import { CERTIFICATION_LIST } from "./Mock/mock";
import Card from "./Components/Card/Card";
import ListView from './Components/ListView/index'
import { USERS_DATA } from "./Mock/mock.js";
import Modal from "./Components/Modal/Modal";
function App() {
  const [userOrignalDetail, setUserOrignalDetails] = useState([]);
  const [userDetail, setUserDetails] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loader, setLoader] = useState(true);
  const [certName, setCertName] = useState("All");
  useEffect(() => {
    const users = USERS_DATA
    console.log("users fetched...", users);
    if (users && users.length) {
      let result = JSON.parse(users);
      setUserDetails(result);
      setUserOrignalDetails(result);
    }
    setLoader(false)
    //https://gentle-castle-11457.herokuapp.com/api/add/angielam
    // fetch("https://gentle-castle-11457.herokuapp.com/api/users")
    //   .then(res => res.json())
    //   .then(users => {
    //     console.log("users fetched...", users);
    //     if (users && users.length) {
    //       let result = JSON.parse(users);
    //       setUserDetails(result);
    //       setUserOrignalDetails(result);
    //     }
    //     setLoader(false)
    //   }).catch((error)=>{
    //     setLoader(false)
    //   })
  }, []);
  const certHandler = event => {
    console.log(event.target.value);
    const { value } = event.target;
    console.log("certName", value);
    setCertName(value);
    if (value === "All") {
      setUserDetails(userOrignalDetail);
    } else {
      let filteredLocation = userOrignalDetail.filter(item => item.certificationsList.some(cert => cert.title === value))
      console.log("filteredLocation", filteredLocation)
      setUserDetails(filteredLocation);
    }
  };
  const showModal = data => {
    setModalState(true);
    setModalData(data);
  };
  const hideModal = event => {
    setModalState(false);
    setModalData({});
  };

  return (
    <div className="container-fluid main-content-bg-color min-height100">
      {loader && <Spinner />}
      <Header></Header>
      <section className="container">
        <div className="filter-section p-0">
          <div className="row mt-3 mb-3">
            <div className="col-12">
              <Selectbox
                name="certification"
                id="certification"
                data={CERTIFICATION_LIST}
                label="Certification Name"
                changeHandler={certHandler}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
         
              <div className="col-12 p-0">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Rank</th>
                      <th>Points</th>
                      <th>Badges</th>
                      <th>Trails</th>
                      <th>Superbadges</th>
                      <th>Certifications</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                {userDetail
                  ? userDetail.map((item, index) => (<ListView {...item} index={index} key={index} showModal={showModal}/>))
                  : null}
                  </tbody>
                </table>
              </div>
            

          {userDetail.length === 0 && !loader && <div>No Data Found!!</div>} 
        </div>
        {modalState&& <Modal show={modalState} handleClose={hideModal}>
          <div className="row">
            <div className="col-12">
              <Card {...modalData} isModal />
            </div>
            <div className="modal_overflow">
            <div className="col-12 mt-3">
              
              <div className="row row pl-3 pr-3 mb-3">
                <div class="col-12">
                  <h4>Superbadges</h4>
                  <hr/>
                  
                </div>
                {modalData.superbadges.length?
                  modalData.superbadges.map(item => (
                    <div className="superBadgeList"><img height="50px" src={item.Award.ImageUrl} /><div>{item.Award.Label}</div></div>
                  )):<div className="pl-3 pr-3">No Superbadges</div>}
              </div>
            </div>
            
            <div className="col-12">
              <h4 className="pl-3 pr-3">Certifications</h4>
              {modalData.certificationsList &&
                modalData.certificationsList.map(item => (
                  <div class="media border p-3 aligncenter" key={item.title}>
                    <img height={`${item.title === 'Salesforce Certified JavaScript Developer I' ? '95px' : '70px'}`} src={item.certificationImageUrl} alt={item.title} class="mr-3"/>
                      <div class="media-body">
                      <h5 className="m-0">{item.title} {' '}</h5>
                      <div>{item.description}</div>
                      <p> <small><strong>Date Completed</strong> {' '} <i>{item.dateCompleted}</i></small></p>
                      </div>
                 </div>
                ))}
            </div>
            </div>
          </div>
        </Modal>}
      </section>
    </div>
  );
}

export default App;
