// import { Suspense } from "react"
// import { listRegions } from "@lib/data"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"

// export default async function Nav() {
//   const regions = await listRegions().then((regions) => regions)

//   return (

//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">

//           <div className="flex-1 basis-0 h-full flex items-center">
//           <div className="h-full">  
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           {/* <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               data-testid="nav-store-link"
//             >
//               Medusa Store

//             </LocalizedClientLink>
//           </div> */}
//        <div className="flex gap-20">

//       <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               // data-testid="nav-store-link"
//             >
//              Home 
//             </LocalizedClientLink>
//           </div>

//           <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               // data-testid="nav-store-link"
//             >
//              About us
//             </LocalizedClientLink>
//           </div>

//           <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               // data-testid="nav-store-link"
//             >
//              Contact us
//             </LocalizedClientLink>
//           </div>

//           <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               // data-testid="nav-store-link"
//             >
//              Product
//             </LocalizedClientLink>
//           </div>
// </div>
//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden small:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}


//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 Account
//               </LocalizedClientLink>

//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// import { Suspense } from "react";
// import { listRegions } from "@lib/data";
// import LocalizedClientLink from "@modules/common/components/localized-client-link";
// import CartButton from "@modules/layout/components/cart-button";
// import SideMenu from "@modules/layout/components/side-menu";
// import "../nav/sty.css"
// import Image from "next/image";


// export default async function Nav() {
//   const regions = await listRegions().then((regions) => regions);

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//         <div className="felx flex-1 basis-0 h-full  items-center ">
//           <div className="h-full">
//         <Image 
//            src={require('../../../../../../organic-ecomm-storefront/public/orgitalogo.svg')}
//            width={200} height={10} style={{ height:'70px'  }}  />
//            </div>
//           </div> 

//           <div className="hidden flex-1 basis-0 h-full  items-center" >
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>


//           <div className="hidden md:flex gap-20 justify-center text-center">
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Home
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 About us
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Contact us
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                Product 
//               </LocalizedClientLink>

//             </div>
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end ">
//             <div className="hidden md:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}

//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 Account
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//           <div className="menu-bar">
//           <Image 
//            src={require('../../../../../../organic-ecomm-storefront/public/menu-bar.svg')}
//            width={40} height={10} style={{ height:'25px'  }}  />
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <div className="hidden md:hidden">
//         <SideMenu regions={regions} />

//       </div>
//     </div>

//   );
// }


// "use client";

// import { Suspense, useState, useEffect } from "react";
// import LocalizedClientLink from "@modules/common/components/localized-client-link";
// import CartButton from "@modules/layout/components/cart-button";
// import SideMenu from "@modules/layout/components/side-menu";
// import "../nav/sty.css";
// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { PiShoppingCart } from "react-icons/pi";

// export default function Nav() {
//   const [regions, setRegions] = useState([]);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);


//   useEffect(() => {
//     const fetchRegions = async () => {
//       const response = await fetch('/api/regions');
//       const regionsData = await response.json();
//       setRegions(regionsData);
//     };

//     fetchRegions();
//   }, []);

//   var toggleProductDropdown = () => {
//     setIsProductDropdownOpen(!isProductDropdownOpen);
//   };

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <Image
//                 src={require('../../../../../../organic-ecomm-storefront/public/orgitalogo.svg')}
//                 width={200} height={10} style={{ height: '70px' }}
//               />
//             </div>
//           </div>

//           <div className="hidden flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="hidden md:flex gap-20 justify-center text-center">
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Home
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 About us
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Contact us
//               </LocalizedClientLink>
//             </div>
//             <div className="relative flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//                 onClick={toggleProductDropdown}
//               >
//                 Product

//               </LocalizedClientLink>

//               {/* {isProductDropdownOpen && (
//                 <div className="absolute top-full left-0 bg-white border mt-2 p-2 w-48 shadow-lg z-50">
//                   <LocalizedClientLink
//                     href="/"
//                     className="block px-4 py-2 text-sm hover:bg-gray-200"
//                   >
//                     Face Care
//                   </LocalizedClientLink>

//                   <LocalizedClientLink
//                     href="/"
//                     className="block px-4 py-2 text-sm hover:bg-gray-200"
//                   >
//                     Hair Care
//                   </LocalizedClientLink>

//                   <LocalizedClientLink
//                     href="/"
//                     className="block px-4 py-2 text-sm hover:bg-gray-200"
//                   >
//                     Body Care
//                   </LocalizedClientLink>
//                 </div>
//               )} */}

//               {isProductDropdownOpen && (
//                 <div className="absolute top-full left-0 bg-white border mt-2 p-2 w-48 shadow-lg z-50">
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Face Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Hair Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Body Care
//                   </a>
//                 </div>
//               )}

//             </div>
//           </div>
//           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="30px" height="25px" ><path fill="#000000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg> */}
//           <RiArrowDropDownLine  className="text-4xl"/>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden md:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}

//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 <CgProfile  className="text-2xl"/>
//                  {/* Account */}
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >

//                   {/* Cart (0) */}
//                 </LocalizedClientLink>

//               }
//             >
//               <CartButton />

//             </Suspense>

//           </div>
//           <div className="menu-bar" id="#menu-bar">
//             {/* <Image
//               src={require('../../../../../../organic-ecomm-storefront/public/menu-bar.svg')}
//               width={40} height={10} style={{ height: '25px' }} /> */}

//             {/* <div className="sidebar" id="sidebar">
//                     <div className="sidenav">

//                         <ul>
//                             <a href="#">
//                                 <li>Home</li>
//                             </a>
//                             <a href="#">
//                                 <li>About us</li>
//                             </a>


//                             <div className="dropdown1">
//                                 <a href="#">
//                                     <li>
//                                         Product
//                                     </li>
//                                 </a>
//                                 <a href="#">
//                                     <li>Contact us</li>
//                                 </a>
//                                 <div className="dropdown-content1">
//                                     <a href="#">Face Care</a>
//                                     <a href="#">Hair Care</a>
//                                     <a href="#">Body Care</a>
//                                 </div>
//                             </div>
//                         </ul>
//                     </div>
//                 </div> ... */}
//             <div className="menu-bar" id="#menu-bar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//               <Image
//                 src={require('../../../../../../organic-ecomm-storefront/public/menu-bar.svg')}
//                 width={40} height={10} style={{ height: '25px' }} />


//               <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
//                 <div className="sidenav">
//                   <ul>
//                     <a href="#">
//                       <li>Home</li>
//                     </a>
//                     <a href="#">
//                       <li>About us</li>
//                     </a>
//                     <div className="dropdown1">
//                       <a href="#">
//                         <li>
//                           Product
//                         </li>
//                       </a>
//                       <a href="#">
//                         <li>Contact us</li>
//                       </a>
//                       <div className="dropdown-content1">
//                         <a href="#">Face Care</a>
//                         <a href="#">Hair Care</a>
//                         <a href="#">Body Care</a>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <div className="hidden md:hidden">
//         <SideMenu regions={regions} />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { Suspense, useState, useEffect, useRef } from "react";
// import LocalizedClientLink from "@modules/common/components/localized-client-link";
// import CartButton from "@modules/layout/components/cart-button";
// import SideMenu from "@modules/layout/components/side-menu";
// import "../nav/sty.css";
// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";

// export default function Nav() {
//   const [regions, setRegions] = useState([]);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const fetchRegions = async () => {
//       const response = await fetch('/api/regions');
//       const regionsData = await response.json();
//       setRegions(regionsData);
//     };

//     fetchRegions();
//   }, []);

//   const toggleProductDropdown = () => {
//     setIsProductDropdownOpen(!isProductDropdownOpen);
//   };

//   const handleOutsideClick = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <Image
//                 src={require('../../../../../../organic-ecomm-storefront/public/orgitalogo.svg')}
//                 width={200} height={10} style={{ height: '70px' }}
//               />
//             </div>
//           </div>

//           <div className="hidden flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="hidden md:flex gap-20 justify-center text-center">
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Home
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 About us
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Contact us
//               </LocalizedClientLink>
//             </div>
//             <div className="relative flex items-center h-full">
//               <button
//                 onClick={toggleProductDropdown}
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Product
//               </button>

//               {isProductDropdownOpen && (
//                 <div className="absolute top-full left-0 bg-white border mt-2 p-2 w-48 shadow-lg z-50">
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Face Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Hair Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Body Care
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//           <RiArrowDropDownLine className="text-4xl"/>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden md:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}

//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 <CgProfile className="text-2xl"/>
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 />
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//           <div className="menu-bar" id="#menu-bar">
//             <div className="menu-bar" id="#menu-bar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//               <Image
//                 src={require('../../../../../../organic-ecomm-storefront/public/menu-bar.svg')}
//                 width={40} height={10} style={{ height: '25px' }} />

//               <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
//                 <div className="sidenav">
//                   <ul>
//                     <a href="#">
//                       <li onClick={() => setIsSidebarOpen(false)}>Home</li>
//                     </a>
//                     <a href="#">
//                       <li onClick={() => setIsSidebarOpen(false)}>About us</li>
//                     </a>
//                     <div className="dropdown1">
//                       <a href="#">
//                         <li onClick={() => setIsSidebarOpen(false)}>Product</li>
//                       </a>
//                       <a href="#">
//                         <li onClick={() => setIsSidebarOpen(false)}>Contact us</li>
//                       </a>
//                       <div className="dropdown-content1">
//                         <a href="#" onClick={() => setIsSidebarOpen(false)}>Face Care</a>
//                         <a href="#" onClick={() => setIsSidebarOpen(false)}>Hair Care</a>
//                         <a href="#" onClick={() => setIsSidebarOpen(false)}>Body Care</a>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <div className="hidden md:hidden">
//         <SideMenu regions={regions} />
//       </div>
//     </div>
  
//   );
// }

// "use client";

// import { Suspense, useState, useEffect, useRef } from "react";
// import LocalizedClientLink from "@modules/common/components/localized-client-link";
// import CartButton from "@modules/layout/components/cart-button";
// import SideMenu from "@modules/layout/components/side-menu";
// import "../nav/sty.css";
// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoSearch } from "react-icons/io5";

// export default function Nav() {
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   // const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
//   const [regions, setRegions] = useState([]);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   // const sidebarRef = useRef(null);

//   useEffect(() => {
//     const fetchRegions = async () => {
//       const response = await fetch('/api/regions');
//       const regionsData = await response.json();
//       setRegions(regionsData);
//     };

//     fetchRegions();
//   }, []);

//   const toggleProductDropdown = () => {
//     setIsProductDropdownOpen(!isProductDropdownOpen);
//   };

//   const handleOutsideClick = (event: MouseEvent) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
//       setIsSidebarOpen(false);
//     }
//   };
//   // const handleOutsideClick = (event) => {
//   //   if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//   //     setIsSidebarOpen(false);
//   //   }
//   // };

//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <Image
//                 src={require('../../../../../public/logo-orgita.svg')}
//                 width={200} height={10} style={{ height: '70px' }} alt="img"
//               />
//             </div>
//           </div>

//           <div className="hidden flex-1 basis-0 h-full items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="hidden md:flex gap-20 justify-center text-center">
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Home
//               </LocalizedClientLink>
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/about"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 About us
//               </LocalizedClientLink>
//             </div>
//             <div className="relative flex items-center h-full">
//               <button
//                 onClick={toggleProductDropdown}
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                 Product <RiArrowDropDownLine className="-mt-7  ml-28  text-4xl"/>
//               </button>

//               {isProductDropdownOpen && (
//                 <div className="absolute top-full left-0 bg-white border mt-2 p-2 w-48 shadow-lg z-50">
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Face Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Hair Care
//                   </a>
//                   <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">
//                     Body Care
//                   </a>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center h-full">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               >
//                Contact us
//               </LocalizedClientLink>
//             </div>
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden small:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 {/* Account  */}
//                 <CgProfile className="text-2xl"/>
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   {/* Cart (0) */}
//                   <FiShoppingCart  className="text-2xl"/>
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>

//           <div className="menu-bar" id="#menu-bar">
//             <div className="menu-bar" id="#menu-bar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//               <Image
//                 src={require('../../../../../public/menu-bar.svg')}
//                 width={40} height={10} style={{ height: '25px' }} alt="img2"/>

//               <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar" onClick={(e) => e.stopPropagation()}>
//                 <div className="sidenav">
//                   <ul>
//                     <a href="#">
//                       <li>Home</li>
//                     </a>
//                     <a href="#">
//                       <li>About us</li>
//                     </a>
//                     <div className="dropdown1">
//                       <a href="#">
//                         <li>Product</li>
//                       </a>
//                       <a href="#">
//                         <li>Contact us</li>
//                       </a>
//                       <div className="dropdown-content1">
//                         <a href="#">Face Care</a>
//                         <a href="#">Hair Care</a>
//                         <a href="#">Body Care</a>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <div className="hidden md:hidden">
//         <SideMenu regions={regions} />
//       </div>
//     </div>

//   );
// }

"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import "../nav/sty.css";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export default function Nav() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const [regions, setRegions] = useState([]);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch('/api/regions');
      const regionsData = await response.json();
      setRegions(regionsData);
    };

    fetchRegions();
  }, []);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
    if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
      setIsProductDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isSidebarOpen, isProductDropdownOpen]);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex flex-1 basis-0 h-full items-center">
            <div className="h-full">
              <Image
                src={require('../../../../../public/logo-orgita.svg')}
                width={200} height={10} style={{ height: '70px' }} alt="img"
              />
            </div>
          </div>

          <div className="hidden flex-1 basis-0 h-full items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="hidden md:flex gap-20 justify-center text-center">
            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              >
                Home
              </LocalizedClientLink>
            </div>
            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/about"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              >
                About us
              </LocalizedClientLink>
            </div>
            <div className="relative flex items-center h-full" ref={productDropdownRef}>
              <button
                onClick={toggleProductDropdown}
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              >
                Product <RiArrowDropDownLine className="-mt-7 ml-28 text-4xl" />
              </button>

              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border mt-2 p-2 w-48 shadow-lg z-50">
                  <a href={"/collections/face-care"} className="block px-4 py-2 text-xl font-bold hover:bg-gray-200">
                    Face Care
                  </a>
                  <a href={"/collections/hair-care"} className="block px-4 py-2 text-xl font-bold hover:bg-gray-200">
                    Hair Care
                  </a>
                  <a href={"/collections/body-care"} className="block px-4 py-2 text-xl font-bold hover:bg-gray-200">
                    Body Care
                  </a>
                </div>
              )}
            </div>
            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/contactus"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              >
                Contact us
              </LocalizedClientLink>
            </div>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <CgProfile className="text-2xl" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <FiShoppingCart className="text-2xl" />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

          <div className="menu-bar" id="#menu-bar">
            <div className="menu-bar" id="#menu-bar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Image
                src={require('../../../../../public/menu-bar.svg')}
                width={40} height={10} style={{ height: '25px' }} alt="img2"
              />

              <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar" onClick={(e) => e.stopPropagation()}>
                <div className="sidenav">
                  <ul>

                    <a href="/">
                      <li>Home</li>
                    </a>

                    <a href="/about">
                      <li>About us</li>
                    </a>

                    <div className="dropdown1">
                      <a href="#">
                        <li>Product </li> 
                      </a>

                      <div className="dropdown-content1">
                        <a href={"/collections/face-care"}>Face Care</a>
                        <a href={"/collections/hair-care"}>Hair Care</a>
                        <a href={"/collections/body-care"}>Body Care</a>
                      </div>
   
                    </div>
                    <a href="/contactus">
                        <li>Contact us</li>
                      </a>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className="hidden md:hidden">
        <SideMenu regions={regions} />
      </div>
    </div>
  );
}














