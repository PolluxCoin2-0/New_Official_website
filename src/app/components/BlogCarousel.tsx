// "use client"; // Add this line at the top

// import React, { useState } from 'react';
// import Image from 'next/image'; // Import Image from next/image

// const blogPosts = [
//   {
//     title: 'We built an AI chess bot with ChatGPT',
//     author: 'John Anderson',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur . Sequi, dolor.',
//   },
//   {
//     title: 'How to grow your personal brand as a web designer',
//     author: 'Kyle Parsons',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
//   {
//     title: 'Calm down, monoliths are totally fine',
//     author: 'Andrea Bates',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
//   {
//     title: 'A quick guide to Framer Motion (for dummies)',
//     author: 'Jess Drum',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
//   {
//     title: 'You probably don\'t need kubernetes',
//     author: 'Phil White',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
//   {
//     title: 'State of JavaScript in 2024',
//     author: 'Karen Peabody',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
//   {
//     title: 'What\'s new in Python?',
//     author: 'Dante Gordon',
//     image: '/banner.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
//   },
// ];

// const BlogCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="bg-black-100 py-12">
//       <div className="relative overflow-hidden p-2">
//         <div className="mx-auto max-w-20xl">
//           <div className="flex items-center justify-between">
//             <h2 className="mb-4 text-4xl">The Team Blog</h2>
//             <div className="flex items-center gap-2">
//               <button
//                 className="rounded-lg border-[1px] border-neutral-100 bg-black p-1.5 text-2xl transition-opacity"
//                 onClick={handlePrev}
//               >
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   height="1em"
//                   width="1em"
//                 >
//                   <line x1="19" y1="12" x2="5" y2="12" />
//                   <polyline points="12 19 5 12 12 5" />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-lg border-[1px] border-neutral-400 bg-black p-1.5 text-2xl transition-opacity"
//                 onClick={handleNext}
//               >
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   height="1em"
//                   width="1em"
//                 >
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Carousel container */}
//           <div className="flex overflow-hidden">
//             <div
//               className="flex transition-all duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * 370}px)`, // Slide the posts
//               }}
//             >
//               {/* Loop through each blog post and display them in a row */}
//               {blogPosts.map((post, index) => (
//                 <div
//                   key={index}
//                   className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
//                   style={{ width: '350px', marginRight: '40px' }} // Width of each item
//                 >
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     className="mb-3 h-[200px] w-full rounded-lg object-cover"
//                     width={350} // Set a specific width and height for optimization
//                     height={200}
//                   />
//                   <span className="rounded-md border-[1px] border-neutral-400 px-1.5 py-1 text-xs uppercase text-neutral-500">
//                     {post.author}
//                   </span>
//                   <p className="mt-1.5 text-lg font-medium">{post.title}</p>
//                   <p className="text-sm text-neutral-400">{post.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogCarousel;

