import Cookies from 'universal-cookie';
import {Link, useHistory} from 'react-router-dom'
import CommentsIcon from '../../assets/comments-solid.svg'
import LogoutIcon from '../../assets/logout.png'
import UserIcon from '../../assets/user-solid.svg'
const SideBar = () => {
    const history = useHistory()
    const cookies = new Cookies();
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
        history.push('/')
        window.location.reload();
    }
    return (
        <div className="channel-list__sidebar">
            <div className="channel-list__sidebar__icon1">
                <Link to='/' className="icon1__inner">
                    <img src={CommentsIcon} alt="Chat icon" width="30" />
                </Link>
            </div>
            <div className="channel-list__sidebar__icon1">
                <Link to='/User' className="icon1__inner">
                    <img src={UserIcon} alt="User icon" width="25" />
                </Link>
            </div>
            <div className="channel-list__sidebar__icon2">
                <div className="icon1__inner" onClick={logout}>
                    <img src={LogoutIcon} alt="Logout icon" width="30" />
                </div>
            </div>
        </div>
    )
};

export default SideBar