import Link from 'next/link';

const Whitepaper = () => {
  return (
    <div>
    
      <Link href="/pdf/organized 1.pdf" passHref>
        <button>Download Whitepaper</button>
      </Link>
    </div>
  );
};

export default Whitepaper;
