'use client'
import { HTMLAttributes } from 'react';
import NavItem from './nav-item';
import Image from 'next/image';
import AvatarDemo from './Avatar/index';
import DropdownMenuDemo from './DropDownMenu/index';
import { cn } from '@/lib/utils';

export function MainNav({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const routes = [
    { href: '/', text: 'Home' },
    { href: '/movies', text: 'Movies' },
    { href: '/watchlist', text: 'Watchlist' },
    { href: '/filmmaker', text: 'Filmmaker' },
  ];  

  return (
    <div 
      className={cn('hidden sm:flex w-full relative items-center justify-between px-24', className)}
      style={{
        height: '80px',
        backgroundColor: 'rgba(65, 65, 77, 0)',
      }}
      {...props}
    >
      {/* Logo */}
      <div className="mr-5">
        <Image src="/assets/images/logo-header.png" width={135} height={28} alt="Logo" className="h-8" />
      </div>

      {/* Navigation Items */}
      <div className='flex items-center justify-center flex-grow space-x-5'>
        {routes.map((route, index) => (
          <NavItem key={`navroute-${index}`} href={route.href} text={route.text} />
        ))}
      </div>

      {/* User and Search Icon */}
      {/* <div className="relative ml-auto">
        <button className="p-2 bg-gray-500 rounded-full text-white hover:bg-gray-600">
          Search
        </button>
        <button className="p-2 text-white hover:bg-gray-600">
          User
        </button>
      </div> */}
      <div className="flex items-center space-x-2">
        {/* lookup button */}
        <div className="relative">
          <button
            style={{
              fontFamily: 'inherit',
              borderRadius: '100%',
              height: '38px',
              width: '38px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              /* background-color: white; */
              /* box-shadow: 0 2px 10px var(--black-a7); */
            }}
          >
            <svg width="18px" height="18px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div className="relative">
          <AvatarDemo />
        </div>
        <div className="relative">
          <DropdownMenuDemo />
        </div>
      </div>
    </div>
  );
}
