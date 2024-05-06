import React, { useEffect, useState } from "react";

const lifeCycle = () => {
  const [state, setState]=useState()

useEffect(()=>{

return ()=>{
  console.log('unmount')
}

},[state])

   return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default lifeCycle;
