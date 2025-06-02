import { useState } from 'react';

interface SpotifyPlayerProps {
  className?: string;
}

export function SpotifyPlayer({ className = '' }: SpotifyPlayerProps) {
  const [spotifyLink, setSpotifyLink] = useState('');
  const [embedLink, setEmbedLink] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpotifyLink(e.target.value);
  };

  const generateEmbed = () => {
    try {
      // Convert spotify URL to embed URL
      const url = new URL(spotifyLink);
      const pathSegments = url.pathname.split('/');
      
      // Remove the first empty segment and 'track' or 'playlist'
      pathSegments.shift();
      const type = pathSegments.shift(); // 'track' or 'playlist' or 'album'
      const id = pathSegments.join('/');
      
      const embedUrl = `https://open.spotify.com/embed/${type}/${id}`;
      setEmbedLink(embedUrl);
    } catch (error) {
      alert('Por favor, insira um link válido do Spotify');
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex gap-2">
        <input
          type="text"
          value={spotifyLink}
          onChange={handleInputChange}
          placeholder="Cole o link do Spotify aqui"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={generateEmbed}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Gerar Player
        </button>
      </div>
      
      {embedLink && (
        <iframe
          style={{ borderRadius: '12px' }}
          src={embedLink}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
} 