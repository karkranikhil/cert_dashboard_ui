import React from "react";
import "./Card.css";
function Card(props) {
  const {
    index=0,
    showModal,
    profileData,
    certificationsList,
    badges,
    isModal
  } = props;
  return (
    <div className={`${isModal ? "modal-card" : "card"}`}>
      <div className="card__header" title={profileData.FirstName + ' ' + profileData.LastName}>
        {profileData.FirstName + ' ' + profileData.LastName}
      </div>
      <div className="card__body">
        <div className="row">
          <div className={`col-12 ${isModal ? 'col-md-1' : 'col-md-3'}`}>
            <img height="60" src={profileData.photo} className="card_round" />
          </div>
          <div className={`col-9 ${isModal ? 'modal_head' :''}`}>
            <div><span className="card__label">Total Certifications : </span> {certificationsList.length
              ? certificationsList.length
              : 0}</div>
            <div className="text-capitalize"><span className="card__label">Rank : </span> {badges.RankLabel}</div>
            <div><span className="card__label">Points : </span> {badges.EarnedPointTotal}</div>
            <div><span className="card__label">Badges : </span> {badges.EarnedBadgeTotal}</div>
            <div><span className="card__label">Trails : </span> {badges.CompletedTrailTotal}</div>
          </div>
        </div>
      </div>
      {!isModal && certificationsList.length && (
        <div className="footer__text" onClick={() => showModal(props)}>
          Show All
        </div>
      )}
    </div>
  );
}

export default Card;
