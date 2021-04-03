import React from 'react';
import { useSelector } from "react-redux";
// import { Container } from './styles';

function Squad() {

  const store = useSelector(store => store)
  
  console.log(store)
  return <>
    <h1>SQUAD</h1>
  
  </>;
}

export default Squad;