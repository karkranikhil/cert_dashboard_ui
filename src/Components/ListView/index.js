import React from "react";
import './style.css'
function ListView(props) {
    const {
        index,
        showModal,
        profileData,
        certificationsList,
        badges,
        superbadges,
        isModal
    } = props;
    const formatedNumber=(n)=>{
        return Number(parseFloat(n).toFixed(2)).toLocaleString('en');
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td className="name_css">
                <img height="40px" className="rounded-circle mr-2" src={profileData.photo}/>{'  '}
                {profileData.FirstName + ' ' + profileData.LastName}</td>
            <td><img height="40px" src={badges.RankImageUrl} alt={badges.badgeLabel}/></td>
            <td>{formatedNumber(badges.EarnedPointTotal)}</td>
            <td>{badges.EarnedBadgeTotal}</td>
            <td>{badges.CompletedTrailTotal}</td>
            <td>{superbadges.length}</td>
            <td>{certificationsList.length}</td>
            <td onClick={() => showModal(props)}><a href="javascript:void(0);">View More</a></td>
        </tr>
    );
}

export default ListView;