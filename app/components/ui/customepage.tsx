import Image from "next/image"

import { Tokenmics } from "../tokenmic"
import {
   ChevronRight,
   ChevronLeft,
   Truck,
   ListFilter,
   File

} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import mobility_bouns from "../../../public/images/mobility_bouns.png"
import mobility_upcoin from "../../../public/images/mobility_upcoin.png"
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

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
// import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  
} from "@/components/ui/tabs"


import { MoreVertical, Copy, CreditCard } from "lucide-react"





import { ListProduct } from "../list_product"



export function Dashboard() {
  interface Product {
    title: string;
    image: string;
    banner:string;
    status: string;
    favourite:number;
    rase_is:number;   
    review: string;
    rase_1:string;
    rase_2:string;
    rase_3:string;
    time_end:string;  
    view:number;
    type:number;
    isPinned?: boolean; 


  }
  const list_product: Product[]=[
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', banner:'binance',status:"New", favourite:1,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-09-30T17:00:00",view:100.00 ,type:1,isPinned:true, },
   
  ]
    // Hàm để sắp xếp danh sách sản phẩm
    const pinProducts = (products: Product[]): Product[] => {
      // Lọc ra những sản phẩm đã được pin
      const pinnedProducts = products.filter(product => product.isPinned);
  
      // Giới hạn số lượng pin là 6 sản phẩm
      const limitedPinnedProducts = pinnedProducts.slice(0, 6);
  
      // Lọc ra những sản phẩm không được pin
      const nonPinnedProducts = products.filter(product => !product.isPinned);
  
      // Ghép danh sách, pin lên đầu và giữ các sản phẩm không pin phía sau
      return [...limitedPinnedProducts, ...nonPinnedProducts];
    };
  
    // Sắp xếp danh sách sản phẩm
    const sortedProductList = pinProducts(list_product);
  return (
 
  
        <main className="grid flex-1 items-start gap-4 p-1 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
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

            <div className="flex md:flex justify-center"><Badge variant="default" className="text-2xl text-center px-1 py-1 rounded-sm">Top Aridrop</Badge></div>
            <Tabs defaultValue="Hot">
              <div className="flex items-center md:text-sm">
                <TabsList>
                  <TabsTrigger value="Hot">Hot</TabsTrigger>
                  <TabsTrigger value="tele">Telegram</TabsTrigger>
                  <TabsTrigger value="game">Game</TabsTrigger>
                  <TabsTrigger value="testnet">Testnet</TabsTrigger>
                  {/* <TabsTrigger value="nv">Nhiệm vụ mạng xã hội</TabsTrigger> */}
                  {/* <TabsTrigger value="retroactive">Retroactive</TabsTrigger>  */}
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
                    className="h-7 gap-1 text-sm md:none"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Tải xuống</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="Hot">
                   <ListProduct data ={sortedProductList}/>
              </TabsContent>

              <TabsContent value="tele">
                 b
              </TabsContent>
              <TabsContent value="game">
                 c
              </TabsContent>
              <TabsContent value="testnet">
                 d
              </TabsContent>
              <TabsContent value="nv">
                 nhiệm vụ xã hội
              </TabsContent>

              <TabsContent value="retroactive">
              retroactive
              </TabsContent>
            </Tabs>
          </div> 



          {/*  do tk này */}
          <div  >
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                {/* <div className=">
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
                 
                </div> */}
                <div>
                <CardTitle className="">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Bep20
                    </span>
                  </Button>
                </CardTitle>
               
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
                  <div className="font-semibold">Danh sách ủng hộ website (bep20): 0x006a918741415eddc3331b6b0c1a04a4584eec91 <details></details>
                  
                  </div>
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
                  
                </div>
               
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
               
              </CardContent>









              <CardContent className="p-6 text-sm">

                <div className="grid gap-3">
                  <div className="font-semibold"> Chi tiết về Aridrop Group
                
                  <CardDescription>Mọi phần thưởng Aridrop  Ref dưới nhóm sẽ được chia đều cho các thành viên tham gia. Nếu  Aridrop có hạn sẽ được phân bổ dạng quà ngẫu nhiên</CardDescription>
                  </div>
                  <div className="grid gap-3">
                 

                   <Tokenmics/>
                  </div>
                  
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
    



 









   
  )
}
