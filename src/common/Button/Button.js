import React from 'react';
import styled  from 'styled-components'


const Button = (props) => {
    const { pending, success, heroes } = props.heroes;
       const MY_HEROES = success ? heroes.map(item => (
        <div key={item.name}>{item.name}</div>
    )) : <div></div>;

    const Btn = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 .5em 1em;
      padding: 0.25em 1em;
      outline: none;
      font-size: 20px;
    `;

    const Items = styled.div`
      font-family: monospace;
      font-size: 20px;
    `;

    return (
        <div onClick={(e) => props.getSwapiHeroes(e)}>
            <Btn>1</Btn>
            <Btn>2</Btn>
            <Btn>3</Btn>
            <Btn>4</Btn>
            <Btn>5</Btn>
            <Items>
                {pending ? "LOADING" : ""}
                {MY_HEROES}
            </Items>
        </div>
    );
}

export default React.memo(Button);
