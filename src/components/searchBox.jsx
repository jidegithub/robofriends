import React from 'react';

const SeachBox = ({Searchfield, SearchChange}) => 
(<div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={SearchChange} />
</div>)


export default SeachBox;