'use client';
import EffectItem from '../EffectButton';
import React, { useState } from 'react';
import { BiPause, BiPlay } from 'react-icons/bi';

interface SongCardProps {
  title: string;
  artist: string;
  imageUrl: string;
}

// export default function SongCard({ title, artist, imageUrl }: SongCardProps) {
const SongCard = ({ title, artist, imageUrl }: SongCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div
      className="group relative p-4 w-full bg-me-secondary rounded-lg overflow-hidden shadow transition duration-300 ease-in-out hover:shadow-md hover:scale-105"
      style={{ minHeight: '160px' }}
    >
      <div className="cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
        <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-50 flex justify-between">
          <EffectItem animation={'pulse-fast'} hoverAnimation="wiggle">
            <div className="cursor-pointer inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 h-auto fill-current text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </EffectItem>
        </div>
        <div className="cursor-pointer absolute top-10 bottom-20 left-4 right-4 top-0 grid place-items-center z-40">
          {isPlaying ? (
            <BiPause
              size={100}
              className="group-hover:fill-me-secondary duration-300 shadow-inner"
            />
          ) : (
            <BiPlay
              size={100}
              className="group-hover:fill-me-secondary duration-300 shadow-inner"
            />
          )}
        </div>
        <div className="relative z-1">
          <img
            className="object-cover w-full h-48 select-none"
            src={imageUrl}
            alt="Flower and sky"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-me-secondary bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-25"></div>
        </div>
      </div>

      <h2 className="mt-2 text-me-text text-sm font-semibold line-clamp-1">
        {title}
      </h2>

      <p className="text-me-text text-sm">{artist}</p>
    </div>
  );
};

export default SongCard;
