import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/Profile/ProfileSide'
import LogoSearch from '../../Components/LogoSearch/LogoSearch'
const Home = () => {
  return (
    <div>
        <div className="Home">
            <ProfileSide>
                
            </ProfileSide>
            <div className="postSide">post</div>
            <div className='rightSide'>right</div>
        </div>
    </div>
  )
}

export default Home