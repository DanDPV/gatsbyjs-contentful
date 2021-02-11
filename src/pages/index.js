import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center bg-blue-100 h-screen">
      <div className="my-20">
        <h1 className="text-3xl font-serif">Post Menu</h1>
        <div className="my-6">
          <div className="bg-white rounded shadow-md hover:shadow-lg p-6 md:w-96 max-w-xl">
            <p className="font-bold">Post title</p>
            <p className="text-sm italic text-gray-500">Wednesday, 10th 2021</p>
            <hr />
            <p className="mt-4">Post description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
