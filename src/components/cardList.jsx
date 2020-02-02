import React from 'react';
import Card from './card';

const CardList = ({ robots }) =>{
    const cardComponent = robots.map((user, i) => {
       return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
    })

    return (
        <React.Fragment>
             {cardComponent}      
        </React.Fragment> 
    )
}

export default CardList;