import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Selectbox from "./Components/Selectbox/Selectbox";
import Spinner from './Components/Spinner/index'
import { CERTIFICATION_LIST } from "./Mock/mock";
import Card from "./Components/Card/Card";
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
    fetch("https://gentle-castle-11457.herokuapp.com/api/users")
      .then(res => res.json())
      .then(users => {
        console.log("users fetched...", users);
        if (users && users.length) {
          let result = JSON.parse(users);
          setUserDetails(result);
          setUserOrignalDetails(result);
        }
        setLoader(false)
      }).catch((error)=>{
        setLoader(false)
      })
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
    <div className="container main-content-bg-color min-height100">
      {loader && <Spinner />}
      <Header></Header>
      <section>
        <div className="filter-section">
          <div className="row mt-3 mb-3">
            {/* <div className="col-12 col-sm-6 col-md-4">
              <Selectbox
                name="location"
                id="location"
                data={LOCATION}
                label="Location"
                changeHandler={locationHandler}
              />
            </div> */}
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
          {userDetail
            ? userDetail.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-3 mt-3" key={index}>
            
                <Card {...item} index={index} showModal={showModal} />
              </div>
            ))
            : null}

          {userDetail.length === 0 && !loader && <div>No Data Found!!</div>} 
        </div>
        {modalState&& <Modal show={modalState} handleClose={hideModal}>
          <div className="row">
            <div className="col-12">
              <Card {...modalData} isModal />
            </div>
            <div className="cert__box">
              {modalData.certificationsList &&
                modalData.certificationsList.map(item => (
                  <div className="col-12 col-sm-4 col-md-2 mb-3">
                    <div className='cart__card'>
                      <img
                        className={`w-100 ${item.title === 'Salesforce Certified JavaScript Developer I' ? 'marginTop20':''}`}
                        src={item.certificationImageUrl}
                        alt={item.title}
                      />
                      <div className={`p-2 ${item.title === 'Salesforce Certified JavaScript Developer I' ? 'marginTop20' : ''}`}>{item.dateCompleted}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Modal>}
      </section>
    </div>
  );
}

export default App;
