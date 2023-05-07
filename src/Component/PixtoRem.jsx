import React from 'react'
import { useState } from 'react'
import './PixtoRem.css'

function PixtoRem() {
const[rem,setRem]=useState();
const[px,setPx]=useState();
const value=16;

const handlePixel=(e)=>{
  const data=e.target.value;
  setRem(data/value);
  setPx(data);
};

  return (
    <div className='main-container'>
    <h1 className='head'>Pixel to rem Conversion 1rem =16px</h1>
    <div className='container'>
        <p className='pixel'>Px</p>
<input className='pixelinput' type='text' value={px} onChange={handlePixel} placeholder={0} />
<p className='equal'>=</p>
<p className='rem' >Rem</p>
<input className='reminput' type='text' value={rem} placeholder={0} disabled />

    </div>
    </div>
  )
}

export default PixtoRem