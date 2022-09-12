import profilePicture from '../../images/profile-picture.jpeg'
import {RiHomeLine} from 'react-icons/ri'
import {FiBarChart2, FiSettings, FiLogOut} from 'react-icons/fi'
import {BsWallet} from 'react-icons/bs'
import './Sidebar.css'
const Sidebar = () =>{
    return(
        <section className='side__bar'> 
            <div className="profile__picture cursor"> 
            <img 
                src={profilePicture}
                alt='profile'
            /> 
            </div>
            <div className='dashboard__icons'> 
            <div className = 'cursor active'> 
                <RiHomeLine className='react-icons'/> 
            </div>
            <div className = 'cursor'> 
                <FiBarChart2 className='react-icons'/> 
            </div>
            <div className = 'cursor'> 
                <BsWallet className='react-icons'/>
            </div>
            <div className = 'cursor'> 
                <FiSettings className='react-icons'/>
            </div>
            </div>
            <div className = 'cursor'> 
            <FiLogOut className='react-icons logout'/>
            </div>
        </section>
    )
}
export default Sidebar; 