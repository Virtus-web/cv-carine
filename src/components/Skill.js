function Skill ({ title, level }) {

    return (
        <div className="skill">
            <p className="skill__label">{title}</p>
            <p className="skill__label">{level}</p>
        </div>
    )
}

export default Skill
