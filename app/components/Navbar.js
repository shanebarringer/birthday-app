'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Chip } from '@heroui/react';
import { Heart, Sparkles } from 'lucide-react';

export default function NavigationBar() {
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
        <div className="flex items-center justify-center w-11 h-11 bg-sakura-500 rounded-full shadow-md">
          <Heart className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-serif font-bold text-xl text-gray-800 leading-tight">
            Happy Sweet 16 Stella!
          </p>
          <p className="text-xs text-gray-500 font-medium">16 Messages of Love</p>
        </div>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Chip
            startContent={<Sparkles className="w-3.5 h-3.5 flex-shrink-0" />}
            variant="flat"
            color="default"
            size="lg"
            classNames={{
              base: "bg-sakura-100 border-2 border-sakura-200 px-3 py-1.5 h-auto",
              content: "text-sakura-700 font-semibold text-sm px-1"
            }}
          >
            From Dad
          </Chip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
