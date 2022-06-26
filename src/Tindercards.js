import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css" 


function Tindercards() {
              const [people, setPeople] = useState ([
             {
               name: 'Elon Musk',
               url: "https://www.usnews.com/object/image/00000163-652c-d812-a367-eded8f0e0000/180515-10thingselonmusk-editorial.jpg",
             },     
             
             {
              name: 'Jeff Bezos',
              url: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_06/2746701/190208-jeff-bezos-ew-1135a.jpg",
            },     
                ]);

const swiped = (direction, nameToDelete) => {
              console.log("removing: " + nameToDelete);
};
  
const outOfFrame = (name)=>{
              console.log(name+ ' left the screen!');
};


  return <div className="tinderCards">
              <div className='tinderCards_cardContainer'>
              {people.map((person) => (
              <TinderCard
              className='swipe'
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir)=> swiped(dir, person.name)}
              onCardLeftScreen={()=> outOfFrame(person.name)}
              >
              <div
              style={{backgroundImage: "url("+person.url+")"}}
              className='card'>
                            <h3>{person.name}</h3>
              </div>

              </TinderCard>
              ))}
              </div>
    </div>
    ;
}
export default Tindercards;