import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../mode"
import { SwitchLangugae } from "../switch-language"
import logo from "../../../public/images/logo.png"
import tele from "../../../public/images/tele.png"
import mobility_bouns from "../../../public/images/mobility_bouns.png"
import mobility_upcoin from "../../../public/images/mobility_upcoin.png"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
 
  ListFilter,
  MoreVertical,
 
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,

  ChartCandlestick,
  TabletSmartphone
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
// import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { ReactNode } from "react";






export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

 

import { ListProduct } from "../list_product"
export function Dashboard() {

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
      href: "#",
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
      href: "#",
      icon: <Image className="h-5 w-5" src={tele} alt="Telegram Icon" />,
      srText: "Telegram",
      tooltipText: "Telegram Airdrop",
      extraClasses: "bg-accent text-accent-foreground",
    },
    {
      index:4,
      href: "#",
      icon: <TabletSmartphone className="h-5 w-5" />,
      srText: "Tool",
      tooltipText: "Tool Airdrop",
      extraClasses: "bg-accent text-accent-foreground",
    },
  ];



  interface Product {
    title: string;
    image: string;
    banner:string;
  }
  const list_product: Product[]=[
    { title: 'Product 1', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'binance' },
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 3', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 4', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 5', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 6', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 1', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'binance' },
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 1', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'binance' },
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},
    { title: 'Product 2', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium' , banner:'binance'},

  ]  




  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
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


      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {/* header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Mobile
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
              
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">a </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">b</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>c</BreadcrumbPage>
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









        
        <main className="grid flex-1 items-start gap-4  sm:px-6 sm:py-0  md:px-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Top Airdrop New</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Airdrop crypto là hình thức phân phối miễn phí token hoặc tiền điện tử từ một dự án blockchain tới người dùng. Mục tiêu của airdrop là quảng bá dự án, tạo sự nhận biết, hoặc thưởng cho người dùng trung thành. Thông thường, người dùng cần hoàn thành một số nhiệm vụ như theo dõi mạng xã hội, giữ một lượng token nhất định, hoặc đăng ký ví để nhận phần thưởng. Airdrop giúp tăng sự tương tác và lan tỏa thông tin về dự án trong cộng đồng crypto.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Làm ngay</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                
                    <div  >
                      <Image src={mobility_bouns } alt=""/>
                  </div>
               
                <CardFooter>
                <CardTitle className="text-4xl mt-1">Phần thưởng Airdrop</CardTitle>
                <div className="text-xs text-muted-foreground">
                    +10%  trên tháng
                  </div>
                </CardFooter>
               
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
              <div  >
                    <Image src={ mobility_upcoin } alt=""/>
                  </div>
               
                <CardFooter>
                <CardTitle className="text-4xl mt-1">Nhiều phần thưởng hơn</CardTitle>
                <div className="text-xs text-muted-foreground">
                    +60%  trên tháng
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="flex md:flex justify-center"><Badge variant="default" className="text-2xl text-center">Top airdrop listing (TGE)</Badge>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Tất cả</TabsTrigger>
                  <TabsTrigger value="month">Telegram</TabsTrigger>
                  <TabsTrigger value="year">Game defi</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Sắp xếp</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Sắp xếp</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Mới nhất
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Cũ nhất
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Toàn bộ
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Tải xuống</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                   <ListProduct data ={list_product}/>
              </TabsContent>

              <TabsContent value="month">
                 b
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    BEP20: 0x006a918741415eddc3331b6b0c1a04a4584eec91
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" >0x006a918741415eddc3331b6b0c1a04a4584eec91</Copy>
                      <span className="sr-only"></span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Ủng hộ đội ngũ website là một hành động quan trọng, thể hiện sự đoàn kết và cam kết của tất cả thành viên trong việc xây dựng và phát triển một nền tảng trực tuyến chất lượng. Sự hỗ trợ này không chỉ giúp cải thiện hiệu suất làm việc, mà còn tạo ra một môi trường sáng tạo, nơi mọi người cùng nhau cống hiến ý tưởng và nỗ lực để mang lại trải nghiệm tốt nhất cho người dùng.</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Bounus
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Bounus <details></details></div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Khởi Phong <span></span>
                      </span>
                      <span>$2</span>
                    </li>
                    

                  
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Cong Truong
                      </span>
                      <span>$22</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Trung Nguyen
                      </span>
                      <span>$3.2</span>
                    </li>
                  </ul>
                  {/* <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul> */}
                </div>
                {/* <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div> */}
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Thông tin liên hệ</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Dev</dt>
                      <dd>Tran Van Tuan</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">trancutuan2000@gmail.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+84 0961903217</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2024</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter> 
            </Card>
          </div>
        </main>
      </div>














      
    </div>
  )
}
