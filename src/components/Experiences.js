function Experiences(props) {

    const datas = props.datas

    return (
        <div className="cursus">
            <h2>Expériences professionelles</h2>
            {datas.map(item => (
                <div className="grid__row" key={item.id}>
                    <div className="grid__item">
                        <p className="grid__date">{item.date}</p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__title">{item.title}</h3>
                        <p className="grid__text">{item.text}</p>
                        <p className="grid__location">{item.location}</p>
                        <ul className="grid__missions">
                            {item.missions.map(mission => (
                                <li className="grid__mission" key={mission.id}>
                                    <a href={mission.url} rel="noreferrer" target="_blank">{mission.title}</a>
                                    <ul className="grid__details">
                                        {mission.details ? mission.details.map(detail => (
                                            <li className="grid__detail" key={detail.id}>
                                                <p>{detail.bullet}</p>
                                            </li>
                                        )) : false}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experiences
