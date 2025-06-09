import { useState } from 'react';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import type { SocialLink, Song } from './types';
import SocialLinks from './components/SocialLinks';
import MusicPlayer from './components/MusicPlayer';

const initialLinks: SocialLink[] = [ 
  { id: '1', name: 'Instagram', url: 'https://www.instagram.com/w1eakffx/', icon: 'instagram', enabled: true },
  { id: '2', name: 'Discord', url: 'https://discord.gg/rQq9KgGYDC', icon: 'discord', enabled: true },
  { id: '3', name: 'Twitter', url: 'https://twitter.com/seu_user', icon: 'twitter', enabled: false },
  { id: '4', name: 'LinkedIn', url: 'https://linkedin.com/in/seu_user', icon: 'linkedin', enabled: false },
  { id: '5', name: 'YouTube', url: 'https://youtube.com/@seu_canal', icon: 'youtube', enabled: false },
  { id: '6', name: 'Twitch', url: 'https://twitch.tv/seu_user', icon: 'twitch', enabled: false },
  { id: '7', name: 'GitHub', url: 'https://github.com/Kaoosz1', icon: 'github', enabled: true },
  { id: '8', name: 'TikTok', url: 'https://www.tiktok.com/@w1eakffx', icon: 'tiktok', enabled: true }
  ];

const song: Song = {
  title: "VOU METER O LOUCO EM VOCÊ",
  artist: "MC SAPINHA",
  url: "https://file.garden/aDNsMMyYJVC98rw8/Vibe%20Do%20Bem_7505077015368797446.mp3"
};

function App() {
  const [links] = useState(initialLinks);
  const [canToggleBackground] = useState(true); // coloca false pra não deixar o user mudar o background no olhinho
  const [defaultBackgroundVisible] = useState(false); // define se o fundo vai ser preto ou com imagem se o toggle tiver desativado, false = fundo preto, true = fundo com image

  const [showBackground, setShowBackground] = useState(() => {
    return canToggleBackground ? true : defaultBackgroundVisible;
  });

  const backgroundStyle = showBackground
    ? {
        backgroundImage: 'url(https://i.imgur.com/rryM0J8.jpeg)', // aq muda o fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black'
      }
    : {
        backgroundColor: 'black'
      };

  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center p-4 relative"
      style={backgroundStyle}
    >
      {/* toggle botão fundo */}
      {canToggleBackground && (
        <button
          onClick={() => setShowBackground(!showBackground)}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          title={showBackground ? 'Hide Background' : 'Show Background'}
        >
          {showBackground ? <FaRegEyeSlash size={15} /> : <FaEye size={15} />}
        </button>
      )}

      {/* Profile content with glass effect */}
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
          <img
            src="https://imgur.com/3J6SAEk"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">wkkznfck</h1>
        <p className="text-gray-400 text-sm mb-8">C (et al. variants) / Java / SQL - And knowledge in hacking (Pentest, OSINT)</p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap max-w-sm">
          {links
            .filter(link => link.enabled)
            .map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-gray-300 transition-colors"
              >
                <SocialLinks link={link} />
              </a>
            ))}
        </div>
      </div>

      <MusicPlayer song={song} />
    </div>
  );
}

export default App;

{/* CBV Signature; VmVyaXRheg */}
