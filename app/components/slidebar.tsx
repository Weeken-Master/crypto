"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
  } from "@/components/ui/tooltip"
  import { ReactNode } from "react";
import Link from "next/link";  
import {
    Home,
    Package2,
    Settings,
    ChartCandlestick,
    TabletSmartphone
  } from "lucide-react"
import Image from "next/image";
import tele from "../../public/images/tele.png"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
const  SlideBar = () => {
    interface TooltipItem {
        index:number,
        href: string;
        icon: ReactNode;
        srText: string;
        tooltipText: string;
        extraClasses?: string;
      }
      
      const renderTooltipItem = (  index:number,href: string, icon: ReactNode, srText: string, tooltipText: string, extraClasses: string = "") => {
        return (
          <Tooltip key={index}>
            <TooltipProvider>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${extraClasses}`}
                >
                  {icon}
                  <span className="sr-only">{srText}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{tooltipText}</TooltipContent>
            </TooltipProvider>
          </Tooltip>
        );
      };
    
      const tooltipData: TooltipItem[] = [
        {
          index:1,
          href: "/home",
          icon: <Home className="h-5 w-5" />,
          srText: "Trang chủ",
          tooltipText: "Trang chủ",
        },
        {
          index:2,
          href: "/trading-platform",
          icon: <ChartCandlestick className="h-5 w-5" />,
          srText: "Sàn Airdrop",
          tooltipText: "Sàn Airdrop",
          extraClasses: "bg-accent text-accent-foreground",
        },
        {
          index:3,
          href: "/telegram",
          icon: <Image className="h-5 w-5" src={tele} alt="Telegram Icon" />,
          srText: "Telegram",
          tooltipText: "Telegram Airdrop",
          extraClasses: "bg-accent text-accent-foreground",
        },
        {
          index:4,
          href: "/tool-aridrop",
          icon: <TabletSmartphone className="h-5 w-5" />,
          srText: "Tool",
          tooltipText: "Tool Airdrop",
          extraClasses: "bg-accent text-accent-foreground",
        },
      ];
    
    


  return (
    <div>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          
        <TooltipProvider>
          
        {tooltipData.map((item, index) =>
        renderTooltipItem(index,item.href, item.icon, item.srText, item.tooltipText, item.extraClasses)
          )}
        
        </TooltipProvider>

       
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
           <Tooltip>
          <TooltipProvider>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
            </TooltipProvider>
          </Tooltip> 
         </TooltipProvider>
        </nav>
      </aside>




    </div>
  );
};

export default SlideBar
