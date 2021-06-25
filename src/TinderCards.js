import React, { useState } from 'react';
import './TinderCards.css'
import TinderCard from "react-tinder-card"



function TinderCards() {
    const [people, setPeople] = useState([
       
        useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left on screen")
    }

    return (
        <div className="tindercards">
        <div className= "tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard className ="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe= {(dir) => swiped(dir, person.name)}
                onCardLeftScreen= {() => outOfFrame(person.name)}
                >

                <div
                style={{ backgroundImage: `url(${person.name})` }}
                className="card"
                >

                <h3>{person.name}</h3>
                </div>
                </TinderCard>
                


        ))}
        </div>
        </div>
    )
}

export default TinderCards
