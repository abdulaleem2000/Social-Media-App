import React from 'react'
import Cover from '../../img/cover1.jpg'
import Profile from '../../img/profileimages.jfif'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className='ProfileCard'>

        <div className="ProfileImages">
            <img src={Cover} alt="Cover" className='cover'/>
            <img src={Profile} alt="Profile " className='profile'/>
        </div>

        <div className="ProfileName">
            <span>Margot Robbie</span>
            <span>Entrepreneur</span>
        </div>

        <div className="FollowStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>1,200</span>
                    <span>Following</span>
                </div>

            
                <div className="vl">

                </div>

                <div className="followers">
                    <span>2000</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />

        </div>
        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard