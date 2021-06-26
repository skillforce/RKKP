import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import Rating from "./components/raiting/raiting";
import {PageTitle} from "./components/tittle/tittle";


function sum(a: number, b: number) {
    alert(a + b);
}

// sum(5,10);


//function declaration
const App = () => {
    console.log('App rendering');
    return (
        <div>
            <PageTitle tittle={'This is App component'}/>
            <PageTitle tittle={'My Friends'}/>
            Article 1
            <Rating value={5}/>
            <Accordion collapsed={true} titleValue={'Menu'}/>
            <Accordion collapsed={false} titleValue={'User'}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


export default App;