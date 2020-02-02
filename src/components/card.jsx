import React  from 'react';

const Card = (props) => { 
    //const Card = ({name, email, id})
    //const {name, email, id} = props;
    // this is destructuring 4&5, so instead of writing props.id, props.name, props.email...after this we just write {email},
    //{id}, {name} but we are not using it here
return(
    <React.Fragment>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow card-img'>
                <img alt='robot' src={`https://robohash.org/${props.id}?200*200`} />
                <h2>
                    {props.name}{/*props here means robot[index] = props */}
                </h2>
                <p>{props.email}</p>
            </div>
    </React.Fragment>
)};

export default Card;