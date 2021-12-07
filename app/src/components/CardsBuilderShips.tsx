import { RandomArrayImages } from '../images/arrayRandomImages'


interface CardBuilderPropsTypes{
    [name:string]:any
}


const CardsBuilderShips:React.FC<CardBuilderPropsTypes> = ( props ) => {

    const { peopleRedux, showCards } = props
    return (

        <section className="main__cards-wrapper">
            <ul className={showCards === "cards" 
                ? "main__cards-asCards" 
                : "main__cards-asList"}>

                {peopleRedux.map((item:any) => 
                    <li className={showCards === 'cards' 
                    ? "main__cards-card" 
                    : "main__cards-list"}>
                        // eslint-disable-next-line
                        <a className="main__card-link" href="/#"></a>
                            <p className='main__cards-img-wrapper'>
                                <img  className="main__cards-card-img"
                                    src={RandomArrayImages[Math.floor(
                                        Math.random() * RandomArrayImages.length
                                        )]} 
                                    alt="people starships" />
                            </p>
                            <div className="main__cards-description-wrapper">
                                <p className="main__cards-description">
                                    {`Name: ${item.name}`}
                                </p>
                                <p className="main__cards-description">
                                    {`Gender: ${item.gender}`}
                                </p>
                                <p className="main__cards-description">
                                    {`Height: ${item.height}`}
                                </p>
                            </div>
                            
                    </li>
                )}

            </ul>
        </section>
    )
}

export default CardsBuilderShips
