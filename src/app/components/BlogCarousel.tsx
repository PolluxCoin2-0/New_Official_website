// src/app/components/BlogCarousel.tsx

import React from 'react';

const blogPosts = [
  {
    title: 'We built an AI chess bot with ChatGPT',
    author: 'John Anderson',
    image: '/imgs/blog/1.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'How to grow your personal brand as a web designer',
    author: 'Kyle Parsons',
    image: '/imgs/blog/2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'Calm down, monoliths are totally fine',
    author: 'Andrea Bates',
    image: '/imgs/blog/3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'A quick guide to Framer Motion (for dummies)',
    author: 'Jess Drum',
    image: '/imgs/blog/4.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'You probably don\'t need kubernetes',
    author: 'Phil White',
    image: '/imgs/blog/5.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'State of JavaScript in 2024',
    author: 'Karen Peabody',
    image: '/imgs/blog/6.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    title: 'What\'s new in Python?',
    author: 'Dante Gordon',
    image: '/imgs/blog/7.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
];

const BlogCarousel: React.FC = () => {
  return (
    <section className="bg-neutral-100 py-8">
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">The Team Blog</h2>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity opacity-30" disabled>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button className="rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex">
            {blogPosts.map((post, index) => (
              <div key={index} className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1" style={{ width: '350px', marginRight: '20px' }}>
                <img src={post.image} className="mb-3 h-[200px] w-full rounded-lg object-cover" alt={post.title} />
                <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">{post.author}</span>
                <p className="mt-1.5 text-lg font-medium">{post.title}</p>
                <p className="text-sm text-neutral-500">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
