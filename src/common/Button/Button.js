import React, { useState, useEffect } from 'react';


const Button = (props) => {
    console.log(props)
    const { pending, success, rejected, heroes, error } = props.heroes;
    const MY_HEROES = success ? heroes.map(item => (
        <div key={item.name}>{item.name}</div>
    )) : <div></div>;
    return (
        <div>
           <button onClick={props.getSwapiHeroes}>DAVAI PLEASE</button>
            <div>
                {pending ? "LOADING" : ""}
                {MY_HEROES}
            </div>
        </div>
    );
}

export default React.memo(Button);
