'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Chip, Link } from '@heroui/react';
import { Heart, Sparkles, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();
  const isFriendsPage = pathname?.startsWith('/friends');

  return (
    <Navbar
      maxWidth="full"
      height="72px"
      classNames={{
        wrapper: "px-6 sm:px-8",
        base: "bg-white border-b-2 border-sakura-100 shadow-sm"
      }}
    >
      <NavbarBrand className="gap-3">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-11 h-11 bg-sakura-500 rounded-full shadow-md">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-bold text-xl text-gray-800 leading-tight">
                Happy Sweet 16 Stella!
              </p>
              <p className="text-xs text-gray-500 font-medium">Birthday Messages</p>
            </div>
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-2 sm:gap-3">
        <NavbarItem>
          <Link href="/">
            <Chip
              startContent={<Sparkles className="w-3.5 h-3.5 flex-shrink-0" />}
              variant="flat"
              color="default"
              classNames={{
                base: `border-2 px-2 sm:px-3 py-1.5 h-auto cursor-pointer transition-all ${
                  !isFriendsPage
                    ? 'bg-sakura-100 border-sakura-200'
                    : 'bg-white border-gray-200 hover:border-sakura-200'
                }`,
                content: `font-semibold text-xs sm:text-sm px-0.5 sm:px-1 whitespace-nowrap ${
                  !isFriendsPage ? 'text-sakura-700' : 'text-gray-500'
                }`
              }}
            >
              From Dad
            </Chip>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/friends/messages">
            <Chip
              startContent={<Users className="w-3.5 h-3.5 flex-shrink-0" />}
              variant="flat"
              color="default"
              classNames={{
                base: `border-2 px-1.5 sm:px-3 py-1.5 h-auto cursor-pointer transition-all ${
                  isFriendsPage
                    ? 'bg-sakura-100 border-sakura-200'
                    : 'bg-white border-gray-200 hover:border-sakura-200'
                }`,
                content: `font-semibold text-xs sm:text-sm whitespace-nowrap ${
                  isFriendsPage ? 'text-sakura-700' : 'text-gray-500'
                }`
              }}
            >
              From Friends
            </Chip>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
