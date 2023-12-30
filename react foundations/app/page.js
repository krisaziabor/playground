import { useState } from 'react';

function Header({ title }){
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage(){

    function handleClick() {
        setLikes(likes + 1);
    }

    const [likes, setLikes] = React.useState(0);
    const names = ['J Hus', 'Noname', 'Jordan Ward'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}