import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"
import styled from 'styled-components'


const SkillsBox = styled.div`
    margin-top: 0;
`


function Skills() {

    return (
        <SkillsBox>
            <div className="skills">
                <h2>Hard skills</h2>
                <p className="skill__label">Sens de l'écoute, analyse des besoins</p>
                <p className="skill__label">Sens de l'organisation</p>
                <p className="skill__label">Créativité</p>
                <br />
                <h2>Soft skills</h2>
                <p className="skill__label">Curieuse</p>
                <p className="skill__label">Rigoureuse</p>
                <p className="skill__label">Dynamique</p>
                <p className="skill__label">Persévérante</p>
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="Anglais" level="Courant" />
                <Skill title="Espagnol" level="Basique" />
            </div>
            <Interests />
        </SkillsBox>
    )
}

export default Skills
