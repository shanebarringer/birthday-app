'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { Heart } from 'lucide-react';

export default function NavigationBar() {
  return (
    <Navbar
      isBordered
      maxWidth="xl"
      classNames={{
        wrapper: "px-4 sm:px-6",
        base: "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }}
    >
      <NavbarBrand>
        <Heart className="w-5 h-5 text-sakura-500 fill-sakura-500 mr-2" />
        <p className="font-serif font-bold text-xl text-gray-800">Birthday Hearts</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <p className="text-sm text-gray-500">Sweet 16 💕</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
