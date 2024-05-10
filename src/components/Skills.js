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
                <h2>Compétences Frontend</h2>
                <p className="skill__label">javascript</p>
                <p className="skill__label">vue.js</p>
                <p className="skill__label">react</p>
                <br/>
                <h2>Compétences Backend</h2>
                <p className="skill__label">php</p>
                <p className="skill__label">sql</p>
                <p className="skill__label">laravel</p>
                <p className="skill__label">symfony</p>
                <p className="skill__label">docker</p>
            </div>
            <div className="skills language">
                <h2>Langues</h2>
                <Skill title="Anglais" level="Fluent"/>
                <Skill title="Espagnol" level="Remontada"/>
            </div>
            <Interests/>
        </SkillsBox>
    )
}

export default Skills
