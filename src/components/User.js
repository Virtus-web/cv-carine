import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import Avatar from '../assets/avatar.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EventIcon from "@mui/icons-material/Event"
// import LocationOnIcon from "@mui/icons-material/LocationOn"


function User({ nom }) {

    return (
        <div className="user">
            <img src={Avatar} className="user__avatar" alt="Nicolas Pedenau"/>
            <h1 className="user__name">{nom}</h1>
            <p className="user__profession">Développeur | Chef de projet</p><br/>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon/>Aix-en-provence
                </p>
                <p className="user__info">
                    <PhoneIcon/> <a href="tel:+33749646931">0749646931</a>
                </p>
                <p className="user__info">
                    <MailIcon/> <a href="mailto:nicolas.pedenau@hotmail.fr">nicolas.pedenau@hotmail.fr</a>
                </p>
                <p className="user__info">
                    <LinkedInIcon/> <a href="https://www.linkedin.com/in/nicolas-pedenau/" rel="noreferrer"
                                       target="_blank">Page Linked'In</a>
                </p>
            </div>
        </div>
    )
}

export default User
