import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import Avatar from '../assets/avatar.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function User({ nom }) {

    return (
        <div className="user">
            <img src={ Avatar } className="user__avatar" alt="Carine Bultel"/>
            <h1 className="user__name">{nom}</h1>
            <p className="user__profession">Designer d'espace - Architecte d'intérieur | En formation</p>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon/> 3 rue Youri Egorov<br/>13640 La Roque d'Anthéron
                </p>
                <p className="user__info">
                    <PhoneIcon/> <a href="tel:+33643069036">0643069036</a>
                </p>
                <p className="user__info">
                    <MailIcon/> <a href="mailto:pedenau.carine@gmail.com">pedenau.carine@gmail.com</a>
                </p>
                <p className="user__info">
                    <LinkedInIcon/> <a href="https://www.linkedin.com/in/carine-bultel/" rel="noreferrer" target="_blank">Page Linked'In</a>
                </p>
            </div>
        </div>
    )
}

export default User
