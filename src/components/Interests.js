import "./Interests.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import InsightsIcon from '@mui/icons-material/Insights';


function Interests() {
    return (
        <div className="skills">
            <h2 className="h2">Centres d'intérêts</h2>
            <ul>
                <li><InsightsIcon style={{ fontSize: 20 }} /><span>Développpement</span></li>
                <li><TravelExploreIcon style={{ fontSize: 20 }} /><span>Voyage</span></li>
                <li><FitnessCenterIcon style={{ fontSize: 20 }} /><span>Trail / Rugby</span></li>
            </ul>
        </div>
    )
}

export default Interests
