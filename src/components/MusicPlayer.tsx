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
            src="https://cdn.discordapp.com/attachments/1375857331673370718/1375858952473940068/image.png?ex=68406700&is=683f1580&hm=bfcfcaa7ec63cce274f5ff4789a56e377f1f6cec66ce06b9f6d501c1b1eec9ed&"
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
