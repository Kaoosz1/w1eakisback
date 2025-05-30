import { useState, useRef } from 'react';
import type { Song } from '../types';

interface MusicPlayerProps {
  song: Song;
}

export default function MusicPlayer({ song }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 bg-transparent text-white flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
          <img
            src="https://cdn.discordapp.com/attachments/1375857331673370718/1375858952473940068/image.png?ex=683a7840&is=683926c0&hm=58209b5c15fd0aab22d483208c0a5e4af329a668ff2a7628d6a52e57bcf117a2&"
            alt="Album Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium">{song.title}</h3>
          <p className="text-xs text-gray-400">{song.artist}</p>
        </div>
      </div>
      <button
        onClick={togglePlay}
        className="text-white hover:text-gray-300 transition-colors"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <audio
        ref={audioRef}
        src={song.url}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
