import React, { useState, useEffect } from 'react'
import Selector from './Selector'

const SwapField = React.forwardRef(({ obj }, inputRef) => {
  const { id, value = '', setValue, defaultValue, setToken, ignoreValue } = obj
  
  // State for button hover/press effects
  const [maxBtnHovered, setMaxBtnHovered] = useState(false);
  const [maxBtnPressed, setMaxBtnPressed] = useState(false);

  // Validate that all required props exist
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (!id) console.warn('SwapField missing id prop');
      if (!setToken) console.warn('SwapField missing setToken function');
      if (!defaultValue) console.warn('SwapField missing defaultValue');
      if (setValue === undefined) console.warn('SwapField missing setValue function');
    }
  }, [id, setValue, setToken, defaultValue]);

  // Function definition moved up before it's used in JSX
  function getInputClassname() {
    let className =
      'w-full outline-none h-9 appearance-none text-2xl bg-transparent text-white placeholder-gray-500'
    return className
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-1'>
        <label className='text-xs text-gray-500'>
          {id === 'srcToken' ? 'You Pay' : 'You Receive'}
        </label>
      
      </div>
      
      <div className='flex items-center justify-between'>
        <input
          ref={inputRef}
          className={getInputClassname()}
          type="number"
          value={value}
          placeholder="0.0"
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Pass required props to Selector */}
        {defaultValue && (
          <Selector
            id={id || 'tokenSelector'} 
            setToken={setToken}
            defaultValue={defaultValue}
            ignoreValue={ignoreValue}
          />
        )}
      </div>
      
      <div className='flex justify-end mt-1'>
        <button 
          className='text-xs text-teal-500 hover:text-teal-400 font-medium transition-colors'
          style={{
            transform: maxBtnPressed ? 'scale(0.95)' : maxBtnHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.2s ease, color 0.2s ease'
          }}
          onMouseEnter={() => setMaxBtnHovered(true)}
          onMouseLeave={() => {
            setMaxBtnHovered(false);
            setMaxBtnPressed(false);
          }}
          onMouseDown={() => setMaxBtnPressed(true)}
          onMouseUp={() => setMaxBtnPressed(false)}
          onClick={() => setValue('1.0')}
        >
          MAX
        </button>
      </div>
    </div>
  )
})

// Add displayName for easier debugging
SwapField.displayName = 'SwapField';

export default SwapField