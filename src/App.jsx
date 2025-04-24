import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import SearchInput from './components/SearchInput';


function App() {
  const handleCourseSelect = (course) => {
    alert(`Selected: ${course.title}`);
  };

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      
      <SignedIn>
        <div className="p-4 max-w-md mx-auto">
          <h1 className="text-xl font-bold mb-4">Course Search</h1>
          <SearchInput onSelect={handleCourseSelect} />
        </div>
      </SignedIn>
    </>
  )
}

export default App
