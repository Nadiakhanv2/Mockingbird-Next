import React from 'react'

const Dummy = () => {
    return (
      <>
        <style jsx>
          {`
            .dummy {
              color: red;
              font-size: 50px;
              font-family: "Arial";
              text-align: center;
            }
          `}
        </style>
        <div className='dummy'> dummy page</div>
      </>
    );
}

export default Dummy;
