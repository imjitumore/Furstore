import React, { useState } from "react";

export const CustomFetch = (url) => {
  const [data, setData] = useState([]);

  fetch(url).then((res)=>{
    return res.json()
  }).then((item)=>{
    setData(item)
  })
 return{data}
console.log(data)
};
