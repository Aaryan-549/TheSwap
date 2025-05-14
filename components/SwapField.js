import React from 'react'
import Selector from './Selector'
import dynamic from 'next/dynamic'

// Dynamically import motion components with SSR disabled
const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false }
);

const SwapField = React.forwardRef(({ obj }, inputRef) => {
  const { id, value = '', setValue, defaultValue, setToken, ignoreValue } = obj
  const [mounted, setMounted] = React.useState(false);

  // Validate that all required props exist
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (!id) console.warn('SwapField missing id prop');
      if (!setToken) console.warn('SwapField missing setToken function');
      if (!defaultValue) console.warn('SwapField missing defaultValue');
      if (setValue === undefined) console.warn('SwapField missing setValue function');
    }
    setMounted(true);
  }, [id, setValue, setToken, defaultValue]);

  // Function definition moved up before it's used in JSX
  function getInputClassname() {
    let className =
      'w-full outline-none h-9 appearance-none text-2xl bg-transparent text-white placeholder-gray-500'
    return className
  }

  // For server-side rendering, use a simple button
  const MaxButton = mounted ? (
    <MotionButton 
      className='text-xs text-teal-500 hover:text-teal-400 font-medium transition-colors'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setValue('1.0')}
    >
      MAX
    </MotionButton>
  ) : (
    <button className='text-xs text-teal-500 hover:text-teal-400 font-medium transition-colors'>
      MAX
    </button>
  );

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-1'>
        <label className='text-xs text-gray-500'>
          {id === 'srcToken' ? 'You Pay' : 'You Receive'}
        </label>
        <div className='text-xs text-gray-500'>
          Balance: 0.00
        </div>
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
        {MaxButton}
      </div>
    </div>
  )
})

// Add displayName for easier debugging
SwapField.displayName = 'SwapField';

export default SwapField