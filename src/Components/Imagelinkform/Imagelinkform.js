import React from 'react';
import './Imagelinkform.css';


const Imagelinkform=({onInputChange,onButtonSubmit})=>
{
    return( 
  <div>
<p className='f4'> 
{'This Magic Brain will detect faces in your pictures.Give it a try! '}
</p>
<div className='center'>
  <div className='form center pa4 br3 shadow-5'>
    <input clasname='f4 pa2 w-70 center'type='text'onChange={onInputChange}/>
    <button className='button br3 w-30 grow f4 link ph3 pv2 dib black  bg-light-blue' onClick={onButtonSubmit}>Detect</button>

  </div>
</div>
</div>
    )
}


export default Imagelinkform;
