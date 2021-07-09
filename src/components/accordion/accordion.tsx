import React from 'react';
import s from './accordion.module.css';

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccColl:(x:boolean)=>void;
}

type AccordionTittlePropsType = {
    title: string;
    setAccColl:(x:boolean)=>void;
    collapsed:boolean
}


function Accordion(props: AccordionPropsType) {
    const {collapsed,setAccColl} = props;
    const{acc} =s;
    return (<div className={acc}>
        <AccordionTittle collapsed={collapsed} setAccColl={setAccColl} title={props.titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>)
}


function AccordionTittle(props: AccordionTittlePropsType) {
    const{setAccColl, collapsed}=props;
    const{acc_title}=s;
    return <h3 className={acc_title} onClick={()=>{setAccColl(!collapsed)}
    }>--{props.title}--</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendered');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;

