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
        return n ? Number(parseFloat(n).toFixed(2)).toLocaleString('en'): 0
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td className="name_css">
                <img height="40px" className="rounded-circle mr-2" src={profileData.photo}/>{'  '}
                <div>
                    <div>{profileData.FirstName + ' ' + profileData.LastName}</div>
                    <div className="company_name">{profileData.CompanyName}</div>
                </div>
                
                
                </td>
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