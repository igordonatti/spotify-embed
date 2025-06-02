import './App.css'
import { SpotifyPlayer } from './components/SpotifyPlayer'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <h1 className="text-3xl font-bold mb-8">Spotify Player</h1>
      <div className="w-full max-w-2xl">
        <SpotifyPlayer />
      </div>
    </div>
  )
}

export default App
