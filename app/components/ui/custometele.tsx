import Link from "next/link"
import {
  ArrowUpRight,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import logomexc from "../../../public/images/mexclogo.png"
import mexcbanner from"../../../public/images/mexcbanner.png"
import tele from"../../../public/images/tele2.jpg"
import { ListProduct } from "../list_product"

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export default function Telegram() {

  
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
    { title: ' PIn sản phẩm', image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', banner:'binance',status:"New", favourite:1,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-09-30T17:00:00",view:100.00 ,type:7,isPinned:true },
   
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'bingx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:91.2 ,type:7,isPinned: false },
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:7,isPinned: false },
    { title: ' Đào token WYND với tiện ích Grass 2Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'mexc',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:94 ,type:7,isPinned: false },
    
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:7,isPinned: false },
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:7 ,isPinned: false},  
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium  ', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:7,isPinned: false },
    { title: ' Đào token WYND với tiện ích Grass Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', banner:'binance',status:"New", favourite:1,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:94 ,type:7,isPinned: false },
   
    { title: ' PIn sản phẩms 2', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'bingx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:81 ,type:7,isPinned: true },
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:81,type:7,isPinned: false },
    { title: ' Đào token WYND với tiện ích Grass 2Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'mexc',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:81 ,type:7 ,isPinned: false},
    
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:7,isPinned: false},
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:7,isPinned: false},  
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium  ', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:7,isPinned: false},
  
  ]

  
  const pinProducts = (products: Product[]): Product[] => {
  
    const pinnedProducts = products.filter(product => product.isPinned);

   
    const limitedPinnedProducts = pinnedProducts.slice(0, 6);

  
    const nonPinnedProducts = products.filter(product => !product.isPinned);

  
    return [...limitedPinnedProducts, ...nonPinnedProducts];
  };

  // Sắp xếp danh sách sản phẩm
  const sortedProductList = pinProducts(list_product);

    return (
    
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8  " style={{maxWidth:"1600px"}}>

          






        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Dự Án TGE</CardTitle>
                <CardDescription>
                  Dữ liệu cập nhật gần đây!
                </CardDescription>
              </div>
            
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên dự á<nav></nav></TableHead>
                    <TableHead>Hình Ảnh</TableHead>
                    <TableHead className="text-right">$Rase</TableHead>
                    <TableHead className="text-right">Giá dự kiến</TableHead>
                   
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium whitespace-normal line-clamp-2 break-words min-h-[2rem] text-sm   "style={{maxWidth:"15rem"}}>Đào token WYND với tiện ích Grass 2Đào token WYND với tiện ích Grass </div>
                      
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        <span>Mô tả:</span> Cài extension
                      </div>
                    </TableCell>
                    <TableCell className="text-center"><div className="image_san">

                    <Image 
                      loading='lazy'
                      src= {logomexc} // Assuming banner is an image URL
                      alt="" 
                      className=" object-cover rounded-sm" 
                      sizes="(max-width: 100px) 100vw, (max-width: 100px) 10vw, 20vw"
                      width={40} 
                      height={30} 
                    />
                    </div></TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell className="text-right">$20</TableCell>
                   
                   
                  </TableRow>


               
                
                </TableBody>
              </Table>
            </CardContent>
          </Card>









          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Thông báo   </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1772810137792843776/gyJckuGt_400x400.jpg" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1772810137792843776/gyJckuGt_400x400.jpg" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1772810137792843776/gyJckuGt_400x400.jpg" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
             
            </CardContent>
          </Card>
        </div>


        <div className="grid gap-1 md:gap-8 lg:grid-cols-1 xl:grid-cols-1 ">
        
                <Card className="p-2 w-full">
                    <div className="flex justify-evenly gap-2 text-center">
                        <div className="c-1">
                          <div className="title">
                            <span>Token Airdrop</span>
                            <br/>
                            <p>Hoàn Thành Các Nhiệm Vụ Để Nhận Thưởng</p>
                            <div className="text-left p-4">
                              
                                <ul className="list-disc text-base  ">
                                  <li>Sự kiện đa số giành cho user mới  - người dùng mới</li>
                                  <li>Vui lòng sử dụng 1 tài khoản trên 1 thiết bị</li>
                               
                                </ul>
                            </div>
                            
                            </div>
                            <div className="icon">

                            </div>
                        </div>

                        <div className="c-2">
                          <div className="title">
                          <Image 
                            loading='lazy'
                            src={mexcbanner}
                            alt="" 
                            className="w-full h-auto object-cover   rounded-md " 
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40 vw"
                            width={500} 
                            height={500}
                            style={{minHeight:"12rem", maxHeight:"12.5rem"}}
                          />
                            </div>
                        </div>
                    </div>
                </Card>
                <div>
                
        </div>
        
        </div>
        {/* PRODUCT SÀN */}
        <div className="grid gap-1 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <Card
            className="xl:col-span-2 lg:p-1" x-chunk="dashboard-01-chunk-1"
          >
            <CardHeader> <div className="flex justify-center"><Badge className="lg:text-3xl py-1  ">  <Image 
                            loading='lazy'
                            src={tele}
                            alt="" 
                            className="w-full h-auto object-cover   rounded-md " 
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30 vw"
                            width={100} 
                            height={100}
                            style={{minWidth:"2rem"}}
                          
                          /></Badge></div></CardHeader>
             <ListProduct data ={sortedProductList}/>
          </Card>
        
        </div>
      </main>
    );
  }
  