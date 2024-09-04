import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


const Header = () => {
    return (
        <div>
            <nav className="py-4 flex justify-between items-center">
                <Link>
                    <img src="logo.png" className="h-20" />
                </Link>
                <Button variant="outline">Login</Button>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <Link to="/post-job">
                        <Button variant="destructive" className="rounded-full"></Button>
                    </Link>
                    <UserButton />
                </SignedIn>
            </nav>

        </div>
    )
}

export default Header