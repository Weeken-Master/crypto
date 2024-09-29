"use client"

import { useRouter } from "next/navigation"; // Import useRouter từ Next.js

import Image from "next/image"
import "../css/loading.css"
// import Link from "next/link"
import {
  ChevronLeft,
 
  PlusCircle,
 
  DollarSignIcon,
 

} from "lucide-react"
import telegramicon from "../../../public/images/tele.png"
import { Badge } from "@/components/ui/badge"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"
import YouTubeEmbed from "../youtube"

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images."

export function DetailProduct() {

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
        description:string;
        linkyoutube: string;
        task: string;
        premarket:number;
        laupach:string;
        img1:string;
        img2:string;
        img3:string;
        img4:string


    
    
      }
      const product: Product =
        { title: 'Đào token WYND với tiện ích Grass Đào token WYND với tiện ích Grass',
          image: 'https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium', 
          banner:'binance',
          status:"New",
          favourite:1,
          rase_is:1,
          review:"Dự án đã gọi vốn thành công 1M$",
          rase_1:"Okx ventus", 
          rase_2:"BinanceLabs", 
          rase_3:"Captial",
          time_end:"2024-12-31T00:00:00",
          view:100.00,
          description:"Lipsum dolor sit amet, consectetur adipiscing elit",
          linkyoutube: '<iframe    width="100%"      src="https://www.youtube.com/embed/a3acDNn7cBY?si=Z2X-qflr5RjW9k6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          task: 'Lipsum dolor sit amet, consectetur adipiscing elit',
          premarket:0.3,
          laupach:"",
          img1:"https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium",
          img2:"https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium",
          img3:"https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium",
          img4:"https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"



        
        }
       
       
        const router = useRouter(); 
     
  return (

        
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
     
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7"  onClick={() => router.back()} >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 ">
                 Kèo ngon
              </h1>
              <Badge  className="ml-auto sm:ml-0">
                 Rase: 10M$
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                {/* <Button variant="outline" size="sm">
                 
                </Button> */}
                <Button variant="outline" size="sm">
                Join Telegram
                    <Image src={telegramicon} alt=""   className="w-full h-auto object-cover rounded-sm px-1" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 3vw, 1vw"
                  width={1} 
                  height={2}  ></Image>
                </Button>
                <Button size="sm">Làm ngay</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
             
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle className=""><Badge className=" px-2 text-base">Airdrop</Badge>
                    <span className="px-2">{product.title}</span></CardTitle>
                    <CardDescription>
                     {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                
                    <Image src="https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"  alt="" 
                    className="w-full h-auto object-cover   rounded-md " 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40 vw"
                    width={500} 
                    height={500}/>
                 
                    <div className="grid gap-6  mt-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name" className="text-md">Gọi vốn từ:</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="BinanceLab, Okx ventus.."
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Nhiệm vụ:  </Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                         <Button >Tham gia ngay</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Hướng dẫn video Youtube</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <YouTubeEmbed iframeHtml={product.linkyoutube} />
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      Xem hướng dẫn
                    </Button>
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Giá dự kiến + Tỷ lệ chuyển đổi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-start ">
                        <DollarSignIcon></DollarSignIcon>
                        <span>0.1</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Trạng thái + Thông tin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        {/* <Label htmlFor="status">Trạng thái nhiệm vụ</Label> */}
                        <div className="containermy text-sm">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                      
                      </div>

                      <span>Đang cập nhật</span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  {/* <CardHeader>
                    <CardTitle>TW</CardTitle>
                    <CardDescription>
                      a
                    </CardDescription>
                  </CardHeader> */}
                  <CardContent>
                    <div className="grid gap-2 mt-2">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"
                            width="84"
                          />
                        </button>
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"
                            width="84"
                          />
                        </button>
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="https://pbs.twimg.com/media/GYYU3YSaEAA8G-S?format=jpg&name=medium"
                            width="84"
                          />
                        </button>   
                       
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Lịch Laupach Token</CardTitle>
                    <CardDescription>
                        Đang cập nhật
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Xem Thêm
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
            
              <Button variant="outline" size="sm">
                Join Telegram
              </Button>
              <Button size="sm">Làm ngay</Button>
            </div>
          </div>
        </main>

        
        </div>
      </div>
    
  )
}
