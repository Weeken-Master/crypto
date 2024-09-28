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
  CardFooter
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
import binancelogo from "../../../public/images/binance2.png"
import logomexc from "../../../public/images/mexclogo.png"
import bingx from "../../../public/images/bingxlogo.png"
import okx from "../../../public/images/okxlogo.png"
import bybit from "../../../public/images/bybitlogo.png"
import bitget from "../../../public/images/bitget.png"
import { ListProduct } from "../list_product"


export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export default function Trading() {

  
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


  }
  const list_product: Product[]=[
    { title: ' Đào token WYND với tiện ích Grass Đào token WYND với tiện ích Grass irdrop : Đào token WYND với tiện ích Grass Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', banner:'binance',status:"New", favourite:1,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:100.00 ,type:1 },
   
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'bingx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:91.2 ,type:2 },
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:3 },
    { title: ' Đào token WYND với tiện ích Grass 2Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'mexc',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:94 ,type:1 },
    
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:1 },
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:4 },  
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium  ', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:94,type:1 },
    { title: ' Đào token WYND với tiện ích Grass Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', banner:'binance',status:"New", favourite:1,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:94 ,type:1 },
   
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'bingx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:81 ,type:5 },
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:81,type:5 },
    { title: ' Đào token WYND với tiện ích Grass 2Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'mexc',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial",time_end:"2024-12-31T00:00:00",view:81 ,type:1 },
    
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GYZs24JWgAAvZ8W?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:1},
    { title: ' Đào token WYND với tiện ích Grass 2 Đào token WYND với tiện ích Grass', image: 'https://pbs.twimg.com/media/GKaaaUJXQAAzlFN?format=jpg&name=medium', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:4},  
    { title: ' Đào token WYND với tiện ích Grass 2', image: 'https://pbs.twimg.com/media/GXqjiNibEAECRYK?format=jpg&name=medium  ', banner:'okx',status:"New", favourite:0,rase_is:1, review:"Dự án đã gọi vốn thành công 1M$",rase_1:"Okx ventus", rase_2:"BinanceLabs", rase_3:"Captial" ,time_end:"2024-12-31T00:00:00",view:100.00 ,type:6},
  
  ]
    return (
    
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-between"> <h3 className="text-md">Hoàn phí giao dịch 70% </h3> 
                  <Badge className="text-sm">Mỗi tháng bạn sẽ được Hoàn Phí giao dịch</Badge> </CardTitle>
                  <CardDescription className="g text-balance leading-relaxed w-full">
                  Hoàn phí giao dịch trên các sàn crypto như Binance, MEXC, BingX, và OKX là một trong những lợi ích lớn cho người dùng khi thực hiện giao dịch tiền điện tử. Đây là chương trình nhằm khuyến khích các nhà giao dịch tham gia nhiều hơn vào hệ sinh thái của sàn bằng cách giảm bớt chi phí giao dịch. Mỗi sàn sẽ có những chính sách hoàn phí khác nhau, thường dựa trên khối lượng giao dịch, loại token được giao dịch hoặc việc sử dụng token nội bộ 
                  <br/>Hoàn phí dựa trên khối lượng giao dịch hoặc phí vào lệnh người chơi
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                <Button>Làm ngay</Button>
                </CardFooter>
              </Card>
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Top Airdrop Sàn</CardTitle>
                  <CardDescription className=" text-balance leading-relaxed">
                  Săn airdrop trên các sàn crypto như MEXC, Binance, OKX, BingX thông qua token SPLASH của Bybit hay chương trình Airdrop Hunt của Bybit là cách để người dùng mới kiếm được phần thưởng hấp dẫn mà không cần phải bỏ ra vốn ban đầu. Các sàn thường xuyên tổ chức những sự kiện airdrop nhằm thu hút người dùng mới tham gia nền tảng và trải nghiệm dịch vụ của họ. Ví dụ, SPLASH là token của Bybit được sử dụng trong nhiều chương trình săn airdrop, giúp người dùng có thể nhận các phần thưởng dưới dạng tiền điện tử miễn phí sau khi hoàn thành một số nhiệm vụ cơ bản như đăng ký tài khoản, xác minh KYC, hoặc thực hiện một giao dịch nhỏ.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Làm ngay</  Button>
                </CardFooter>
              </Card>
             
            </div>

          <div className="grid gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-6 ">
            <Card x-chunk="dashboard-01-chunk-0" className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng BINANCE</h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={binancelogo } alt=""   className="rounded-md 1" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 3vw, 1vw"
                  width={80} 
                  height={60} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1%  trên tháng
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1" className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng MEXC</h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={logomexc } alt="" className="rounded-md "/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$75,822</div>
                <p className="text-xs text-muted-foreground">
                  +40.1%  trên tháng
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2" className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng BINGX</h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={bingx } alt="" className="rounded-md "/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +3.1%  trên tháng
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3 " className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng OKX</h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={okx } alt="" className="rounded-md "/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,231</div>
                <p className="text-xs text-muted-foreground">
                  +10.1%  trên tháng
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-4 " className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng BYBIT</h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={bybit} alt="" 
                   className="rounded-md 1" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 3vw, 1vw"
                  width={50} 
                  height={40}  />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$15,892</div>
                <p className="text-xs text-muted-foreground">
                  +14.1%  trên tháng
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5 " className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                 <h3>Hoàn phí nền tảng BITGET </h3> 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}

                <Image src={bitget } alt="" className="rounded-md "/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,231</div>
                <p className="text-xs text-muted-foreground">
                  +1.1%  trên tháng
                </p>
              </CardContent>
            </Card>
         
         
         
         
         
          </div>













        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Danh sách Hoàn Phí</CardTitle>
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
                    <TableHead>Thành Viên</TableHead>
                    <TableHead>Sàn Giao Dịch</TableHead>
                    <TableHead className="text-right">$</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Cong Truong</div>
                      
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        <span>UID:</span>92874100
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
                  </TableRow>


                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Khoi Phong</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        <span>UID:</span>019120302
                      </div>
                    </TableCell>
                    <TableCell className="text-center"><div className="image_san">
                    
                      <Image 
                        loading='lazy'
                        src= {okx} // Assuming banner is an image URL
                        alt="" 
                        className=" object-cover rounded-sm" 
                        sizes="(max-width: 100px) 100vw, (max-width: 100px) 10vw, 20vw"
                        width={40} 
                        height={30} 
                      />
                      </div></TableCell>
                    <TableCell className="text-right">$200.00</TableCell>
                  </TableRow>
                        
                
                </TableBody>
              </Table>
            </CardContent>
          </Card>









          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Top Hoàn Phí   </CardTitle>
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
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1772810137792843776/gyJckuGt_400x400.jpg" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1772810137792843776/gyJckuGt_400x400.jpg" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PRODUCT SÀN */}
        <div className="grid gap-1 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-1"
          >
            <CardHeader> <div className="flex justify-center"><Badge className="text-3xl py-1 "> Tổng Hợp AirDrop Trên Sàn</Badge></div></CardHeader>
             <ListProduct data ={list_product}/>
          </Card>
        
        </div>
      </main>
    );
  }
  