import "./Interests.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import InsightsIcon from '@mui/icons-material/Insights';


function Interests() {
    return (
        <div className="skills interests">
            <h2>Intérêts</h2>
            <ul>
                <li><div className="interest"><InsightsIcon style={{ fontSize: 20 }} /><span>Développement</span></div><span>5 ans</span></li>
                <li><div className="interest"><FitnessCenterIcon style={{ fontSize: 20 }} /><span>Trail / Rugby</span></div><span>6 ans</span></li>
                <li><div className="interest"><TravelExploreIcon style={{ fontSize: 20 }} /><span>Voyage</span></div><span>7 ans</span></li>
            </ul>
        </div>
    )
}

export default Interests
