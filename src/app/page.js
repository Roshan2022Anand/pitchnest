import React from 'react';

const Page = () => {
  return (
    <>
      <nav className="w-full bg-secColor h-10 text-bgColor">
        this ia nav bar
      </nav>
      <div className="w-[300px] h-[300px] m-5 rounded-2xl flex flex-col justify-center items-center bg-secColor text-bgColor">
        <h1>This is a card</h1>
        <p>Some description of the card</p>
        <button className="bg-accentColor rounded-lg px-2 py-1 text-bgColor">
          Click button
        </button>
      </div>
    </>
  );
};
export default Page;
