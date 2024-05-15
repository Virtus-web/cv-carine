import "./Interests.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';


function Interests() {
    return (
        <div className="skills interests">
            <h2>Intérêts</h2>
            <ul>
                <li><div className="interest"><NightlifeIcon style={{ fontSize: 20 }} /><span>Danse</span></div><span>5 ans</span></li>
                <li><div className="interest"><FitnessCenterIcon style={{ fontSize: 20 }} /><span>Crossfit</span></div><span>6 ans</span></li>
                <li><div className="interest"><DirectionsWalkIcon style={{ fontSize: 20 }} /><span>Course à pied</span></div><span>7 ans</span></li>
            </ul>
        </div>
    )
}

export default Interests
