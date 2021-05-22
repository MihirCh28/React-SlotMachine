import React from 'react';


const SlotM = (props) => {
    // let x = '';
    // let y = '';
    // let z = '';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;


    if (x === y && x === z) {
      return (
        <>
          <div className='slot_inner'>
            <h1>
              {x} {y} {z}
            </h1>
            <h1> This is Matching. </h1>
            <hr />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='slot_inner'>
            <h1>
              {x} {y} {z}
            </h1>
            <h1> This is Not Matching. </h1>
            <hr />
          </div>
        </>
      );

    }
  };

  export default SlotM;

// import React from 'react';
// import Matching from './Matching';
// import NotMatching from './NotMatching';

// const SlotM = (props) => {
//   let { x, y, z } = props;
//   <>
//   { (x === y && x === z) ? <Matching a={x} b={y} c={z} /> : <NotMatching a={x} b={y} c={z} /> }
//   </>
// };

// export default SlotM;