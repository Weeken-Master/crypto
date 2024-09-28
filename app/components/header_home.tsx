"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Home,
    Package2,
    PanelLeft,
    Search,
  } from "lucide-react"

import {
   
   
    ChartCandlestick,
   
  } from "lucide-react"


import { Button } from "@/components/ui/button" 
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


import { ModeToggle } from "../components/mode"
import { SwitchLangugae } from "../components/switch-language"
import logo from "../../public/images/logo.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Image from "next/image"



import { usePathname } from 'next/navigation'
const Header = () => {
    const pathname = usePathname()
 
    console.log(pathname) 

  return (
       
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
    {/* NAV MOBILE   CỦA ĐIỆN THOẠI  */}
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/home"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
             Trang chủ
          </Link>
          <Link
            href="/san-airdrop"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <ChartCandlestick className="h-5 w-5" />
             Sàn Aridrop
          </Link>
        
        </nav>




      </SheetContent>
    </Sheet>

    {/* END */}
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">TopAridrop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/"> Aridrop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Tổng hợp dự án</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>














    <div className="relative ml-auto flex-2 md:grow-0">
  
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
      
    </div>
    
    <ModeToggle/>
    <div>
    <SwitchLangugae initialLanguage="vi" /> 

    </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src={logo}
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>

  );
};

export default Header
