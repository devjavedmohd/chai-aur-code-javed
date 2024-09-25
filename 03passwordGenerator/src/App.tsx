import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  // useCallback hook - to use memorise all content for optimisation
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += '0123456789'
    if (characters) str += '{}<>?_)(*&^%$#@#!~+'

    for (let i = 0; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [passwordLength, numberAllowed, characters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectRange(0, 10) - To selected value from clipboard in a range.
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [passwordLength, numberAllowed, characters, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg text-center overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <label>
              <input
                type='range'
                min={6}
                max={20}
                value={passwordLength}
                className='cursor-pointer'
                ref={passwordRef}
                onChange={(e) => {setPasswordLength(Number(e.target.value))}}
              />
              Length: {passwordLength}
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <label>
              <input
                  type='checkbox'
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  className='cursor-pointer'
                  onChange={() => {setNumberAllowed((prev) => !prev)}}
                />
              Numbers
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <label>
              <input
                  type='checkbox'
                  defaultChecked={characters}
                  id='characterInput'
                  className='cursor-pointer'
                  onChange={() => {setCharacters((prev) => !prev)}}
                />
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
