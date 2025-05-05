import { Button } from '@heroui/button';
import React from 'react';

const Home = () => {
  return (
    <div className=' sm:block md:flex justify-between items-center p-14'>
      <div className='w-80 leading-normal'>
        <h1 className='text-4xl font-bold'><span className='rainbow-text'>I Create Websites</span> and have amazing interface and inspire people.</h1>
        <br />
        <p>
          Hi! I’m Alisha, a frontend web developer. I create user-friendly interfaces for fast-growing startups and businesses.
        </p>
        <br />
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>

      <div>
        <img src='./images/favicon.ico' alt='fav' width={70} height={70} />
      </div>

      {/* Rainbow Text Styling (You might need to add this to your global CSS or a separate CSS file) */}
      <style jsx>{`
        .rainbow-text {
          background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Home;