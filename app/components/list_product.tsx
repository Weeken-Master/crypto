"use client";
import Image from 'next/image';
import { useState } from 'react';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import binancelogo from "../../public/images/binnce3.jpg"
import logomexc from "../../public/images/mexclogo.png"
import bingx from "../../public/images/bingxlogo.png"
import okx from "../../public/images/okxlogo.png"
import bybit from "../../public/images/bybitlogo2.png"
import bitget from "../../public/images/bitget.png"
// import logbingx from "../../public/images/bingxlogo.png"
// import { Separator } from "@/components/ui/separator"
// import choiceas from "../../public/images/choice.png"
// Define the interface for a product
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
    type:number; //1 binance 2 okx 3 bybit 4 bingx 5 mexc 6 biget

}

// Define the props interface to include the list of products
interface ListProductProps {
  data: Product[];
}

import Countdown from './countdown';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,

} from "@/components/ui/pagination"; // Adjust the import path as necessary


import { Star , Eye, CircleDollarSign} from 'lucide-react';
import { Button } from '@/components/ui/button';
// ListProduct component accepting data as a prop
const productsPerPage = 18; // Adjust the number of products per page as needed

export function ListProduct({ data }: ListProductProps) {
  // Initialize the state with the passed data
  const [listProducts] = useState<Product[]>(data);
  


  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(listProducts.length / productsPerPage);
  
  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = listProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {/* Map through the current products and render them */}
      {currentProducts.map((product, index) => (
        <div key={index} className='item shadow-xl hover:shadow-gray-800 focus:zoom-in rounded-bl-[5px] rounded-br-[5px] px-1 py-1     rounded-md'>
          <Link href="/product/name-product-i.index">
            <div className='relative z-0 w-full pt-full'>
              <div className='item-image ' >
                <Image 
                  loading='lazy'
                  src={product.image}
                  alt={product.title} 
                  className="w-full h-auto object-cover  rounded-tr-md  rounded-tl-md" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40 vw"
                  width={500} 
                  height={500}
                  style={{minHeight:"12rem", maxHeight:"12.5rem"}}
                />
              </div>
              {product.type <=6?
              <div className='item-banner absolute top-5 left-1 rounded-md bg-gray-900 py-1 px-1'>
                <Image 
                  loading='lazy'
                  src={product.type == 1? binancelogo:product.type == 2? okx:product.type == 3? bybit:product.type == 4? bingx:product.type == 5? logomexc:bitget} // Assuming banner is an image URL
                  alt={product.title} 
                  className="w-full h-auto object-cover rounded-sm" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 10vw, 5vw"
                  width={product.type == 1?5:20} 
                  height={product.type == 1?5:20} 
                />
              </div>:""
                }
              <div className='item-banner absolute top-2   right-1 rounded-md bg-background-gray-300'>
                 <div className='status bg-gray-950 px-1 py-1 w-10 text-left rounded-md text-white text-sm opacity-80 '>
                    {product.status}
                 </div>
              </div>
            </div>
            <div className='p-2 flex-1 flex flex-col justify-between bg-gray-100  rounded-bl-md rounded-br-md ' style={{minHeight:"12.8rem", maxHeight:"12.888rem"}}>
            <div className='whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm  text-gray-900 text-align-center'>
                    <span></span>
                   
                    {/* <Image 
                        loading='lazy'
                        src= {product.favourite == 1?'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lyb3l2w2maml9a': choiceas}
                        alt={product.title} 
                        // className="w-full h-auto object-cover" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        width={60} // Placeholder width, as Next.js requires it
                        height={30} // Placeholder height, as Next.js requires it
                        /> */}
                   
                       <b className='text-gray-700 text-base'> <Badge className='text-sm'>
                       Airdrop</Badge>{product.title}</b> 
                </div>
              <div className="flex justify-between items-center space-x-1 text-gray-900">
                <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                  <span aria-label="promotion price"> <CircleDollarSign className='text-sm'/></span>
                  <div className="truncate flex items-baseline">
                    <span className="text-xs/sp14 font-medium mr-px">=</span>
                    <span className="font-medium text-base/5 truncate">{product.rase_is}M $</span>
                    <span className="text-xs/sp14 font-medium mr-px"></span>
                  </div>
                </div>
                <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto flex items-center "><Eye className='text-base'/> <span className='px-1 text-base'>{product.view}k</span></div>
              </div>
              <div className='task-review mt-1 mb-1'>
              <div>
                  <div className="space-y-1">
                    <div className='flex justify-start items-center'>
                      <div className='text-gray-700'>
                         <Star className='text-base'/>
                      </div>
                    <h4 className="text-sm font-medium leading-none px-2 text-gray-600">Task review</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {product.review}
                    </p>
                  </div>
                  {/* <Separator className="my-4" /> */}
                  {/* <div className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                    <div>{product.rase_1}</div>
                    <Separator orientation="vertical" />
                    <div>{product.rase_2}</div>
                    <Separator orientation="vertical" />
                    <div>{product.rase_3}</div>
                  </div> */}
                </div>
              </div>
                   
              <div className="flex justify-center items-center  mt-2 ">
               
                <Button className='w-full'><Countdown targetDate={product.time_end}/></Button>
              </div>

              
            </div>
          </Link>
        </div>
      ))}
    </div>
    <div className='m-3'>
    <Pagination >
      <PaginationContent>
        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} >
          Previous
        </PaginationPrevious>
        {/* Render Pagination Items */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              <PaginationLink>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} >
          Next
        </PaginationNext>
      </PaginationContent>
    </Pagination>
    </div>
  </div>
  );
}
