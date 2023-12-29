import React from 'react';

const Loading = () => {
    return (
       <div className='wrap-lds-ring'>
           <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
       </div>
    );
};

export default Loading;
