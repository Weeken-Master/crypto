"use client";
import Image from 'next/image';
import { useState } from 'react';

import Link from 'next/link';
import logobinance  from "../../public/images/logobiannce2.png"

  
// Define the interface for a product
interface Product {
  title: string;
  image: string;
  banner:string;
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {/* Map through the current products and render them */}
      {currentProducts.map((product, index) => (
        <div key={index} className='item shadow-lg hover:shadow-gray-400 focus:zoom-in rounded-bl-[5px] rounded-br-[5px] px-1 py-1'>
          <Link href="#">
            <div className='relative z-0 w-full pt-full'>
              <div className='item-image'>
                <Image 
                  loading='lazy'
                  src={product.image}
                  alt={product.title} 
                  className="w-full h-auto object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={500} 
                  height={500}
                />
              </div>
              <div className='item-banner absolute top-0 right-0 rounded-md'>
                <Image 
                  loading='lazy'
                  src={logobinance} // Assuming banner is an image URL
                  alt={product.title} 
                  className="w-full h-auto object-cover rounded-sm" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={20} 
                  height={20} 
                />
              </div>
            </div>
            <div className='p-2 flex-1 flex flex-col justify-between bg-gray-100 rounded-md'>
            <div className='mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm '>
                    <span></span>
                    <Image 
                        loading='lazy'
                        src='https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lyb3l2w2maml9a'
                        alt={product.title} 
                        // className="w-full h-auto object-cover" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        width={60} // Placeholder width, as Next.js requires it
                        height={30} // Placeholder height, as Next.js requires it
                        />
                    HT67 Váy ngủ sexy pha lê siêu đẹp tặng CHÍP, đầm ngủ ren mềm mại quyến rũ Haayan Boutique HT67
                </div>
              <div className="flex justify-between items-center space-x-1">
                <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                  <span aria-label="promotion price">Rase</span>
                  <div className="truncate flex items-baseline">
                    <span className="text-xs/sp14 font-medium mr-px">:</span>
                    <span className="font-medium text-base/5 truncate">3M $</span>
                    <span className="text-xs/sp14 font-medium mr-px"></span>
                  </div>
                </div>
                <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">View: 234,9k</div>
              </div>
              <div className="flex justify-center items-center bg-neutral-400 rounded-md">
                <Countdown targetDate='2024-12-31T00:00:00'/>
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
