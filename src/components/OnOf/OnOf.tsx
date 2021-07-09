import React, {useState} from 'react'
import {Of} from './Of/Of';
import {On} from './On/On';
import s from './OnOf.module.css';
import {Indicator} from './indicator/Indicator';

export type SwitcherType = {
    on: boolean
    onToOf:(on:boolean)=>void;
}

const {switcher} = s;



export const Switcher = () => {

    const[indicOn, setIndic]= useState(false);

    const onToOf=(on:boolean)=>{
        setIndic(!on);
    }

    return (
        <div className={switcher}>
            {indicOn && <On onToOf={onToOf} on={true}/>}
            {indicOn && <Of onToOf={onToOf} on={false}/>}
            {indicOn && <Indicator on={indicOn}/>}
            {!indicOn && <On onToOf={onToOf} on={false}/>}
            {!indicOn && <Of onToOf={onToOf} on={true}/>}
            {!indicOn && <Indicator  on={indicOn}/>}
        </div>

    );

}
