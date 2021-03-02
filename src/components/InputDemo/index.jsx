import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const initState = {
  container: {
    alignItems: 'center',
  },
  label: {
    color: '#e5e7eb',
    fontSize: '16px',
    top: '10px',
  },
}
const focusState = {
  container: {
    alignItems: 'flex-start',
  },
  label: {
    // backgroundColor: 'transparent',
    color: '#3B82F6',
    fontSize: '12px',
    top: '-5px',
  },
}

const FloatLabel = styled.label.attrs({
  className: 'bg-gray-700',
})`
  transition: top 0.2s, font-size 0.2s;
`

const InputDemo = props => {
  const CustomInput = () => {
    const [isFocus, setIsFocus] = useState({})

    useEffect(() => {
      setIsFocus(initState)
    }, [])

    const handleInputFocus = () => {
      setIsFocus(focusState)
    }

    const handleInputInitState = e => {
      if (e.target.value !== '') return
      setIsFocus(initState)
    }

    return (
      <div
        style={{
          ...isFocus.container,
          ...{
            display: 'flex',
            position: 'relative',
          },
        }}
      >
        <FloatLabel
          style={{
            ...isFocus.label,
            ...{
              display: 'block',
              position: 'absolute',
              left: '12px',
              height: '18px',
              padding: '0 4px',
              pointerEvents: 'none',
            },
          }}
        >
          Hello
        </FloatLabel>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputInitState}
          style={{
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            height: '44px',
            border: '1px solid #e5e7eb',
            width: '200px',
            borderRadius: '4px',
            fontSize: '16px',
            padding: '4px 16px',
          }}
          name="username"
          id="username"
          type="text"
          autoComplete="off"
        />
      </div>
    )
  }

  return (
    <>
      <form className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="outline-textfield">
          <input
            type="text"
            name="username"
            placeholder="username's placeholder"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="outline relative border-2 focus-within:border-blue-500">
          <input
            required
            type="email"
            name="email"
            placeholder=" "
            className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
          <label
            htmlFor="email"
            className="absolute top-0 text-lg p-4 -z-1 focus-within:bg-gray-700 duration-300 origin-top-left ease-out"
          >
            Email
          </label>
        </div>
        <div className="outline relative border-2 focus-within:border-blue-500">
          <input
            type="password"
            name="password"
            placeholder=" "
            className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
          <label
            htmlFor="password"
            className="absolute top-0 text-lg bg-gray-800 p-4 -z-1 duration-300 origin-0"
          >
            Password
          </label>
        </div>
      </form>

      <div className="max-w-full mx-auto my-4">
        <h3>TextField 02</h3>
        <form className="w-1/2">
          <div className="floating-input mb-5 relative">
            <input
              type="email"
              id="email"
              className="border border-gray-400 focus:outline-none rounded-md focus:border-blue-500 focus:shadow-sm w-full px-3 py-2 h-12 bg-transparent"
              placeholder="name@example.com"
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className="absolute top-0 left-0 px-3 py-4 h-full focus:text-blue-500 focus:bg-gray-700 pointer-events-none transform origin-top-left transition-all duration-300 ease-in-out"
            >
              Email address
            </label>
          </div>
          <div className="floating-input mb-5 relative">
            <input
              type="password"
              id="password"
              className="border border-gray-500 rounded-md w-full p-3 h-16 bg-transparent"
              placeholder="password"
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="absolute top-0 left-0 px-3 py-2 h-full pointer-events-none transform origin-top-left transition-all delay-300 duration-300 ease-in-out"
            >
              Password
            </label>
          </div>
          <button className="w-full bg-pink-600 text-white p-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="max-w-full my-4">
        <h3>TextField 03</h3>
        <div className="md-input-main">
          <div className="md-input-box">
            <input id="fullName" name="fullName" type="text" placeholder=" " />
            <label htmlFor="fullName">Full Name</label>
            <div className="md-input-underline" />
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto my-4">
        <h3>TextField 04</h3>
        <CustomInput />
      </div>
    </>
  )
}

export default InputDemo
