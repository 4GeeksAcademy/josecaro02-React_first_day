import React from 'react'
import Card from './Card'

const Cards = () => {
    let cardsInfo = [
        { title: "4Geeks", text: "asdfñlkajsdfñal" },
        { title: "Spain", text: "asdfñlkajsdf" },
        { title: "React", text: "lorem:30" },
        { title: "Me encanta React", text: "anha t-bone, porchetta short loin fatback pork ground round meatloaf chislic kevin leberkas sirloin beef." }
    ]
    return (
        <>
            {cardsInfo.map((card) => {
                return <Card title={card.title} text={card.text} />
            })}
        </>
    )
}

export default Cards;