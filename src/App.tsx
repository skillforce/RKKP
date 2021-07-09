import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/accordion';
import Rating from './components/raiting/raiting';
import {Switcher} from './components/OnOf/OnOf';
import NewAccordion from './components/conAcc/newacc';
import ConRating from './components/conRaiting/conRaiting';
import {SwitcherC} from './components/OnOfContr/OnOfC';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accColl, setAccColl] = useState<boolean>(false);
    let [on, setOn]=useState<boolean>(false);
    return (
        <div className={'App'}>
            <NewAccordion titleValue={'Denis'}/>
            <div className="raiting">
                <h2>Your mark?</h2>
                <Rating/>
            </div>
            <div className="raiting">
                <h2>Your mark?</h2>
                <ConRating setRatingValue={setRatingValue} ratingValue={ratingValue}/>
            </div>
            <Switcher/>
            <SwitcherC on={on} setOn={setOn} />
            <Accordion titleValue={'Denis'} collapsed={accColl} setAccColl={setAccColl}/>{on.toString()}
        </div>
    );
}


export default App;