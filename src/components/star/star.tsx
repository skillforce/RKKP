import React from "react";


type StarPropsType = {
    selected: true | false
}


function Star(props: StarPropsType) {
    console.log('star rendered');
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}

export default Star;