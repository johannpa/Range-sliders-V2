import React, { useState } from 'react';


function RangeSlider() {
    const [width, setWidth] = useState(100);

    const [height, setHeight] = useState(100);
    
    const changeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(e.target.value));
    };

    const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(e.target.value));
    };
    
  return (
    <div className='container'>
        <h2>Welcome to my Site</h2>

        <h4>Box Width: {width}px</h4>
        <input
            type="range"
            onChange={changeWidth}
            min={1}
            max={800}
            step={1}
            value={width} 
        />

        <h4>Box Height: {height}px</h4>
        <input 
            type="range" 
            onChange={changeHeight}
            min={1}
            max={400}
            step={1}
            value={height}
            className='custom-slider'
        />

        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className='box'
        ></div>
      
    </div>
  )
}

export default RangeSlider;
