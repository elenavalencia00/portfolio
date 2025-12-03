import { useState, useRef, useEffect } from "react";

type Song = {
  title: string;
  artist: string;
  file: string;
  cover: string;
};

type MusicPlayerProps = {
  songs: Song[];
};

export function MusicPlayer({ songs }: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

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

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-3 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextSong}
      />

      <div className="w-[275px] mx-auto">
        {/* Display Area */}
        <div>
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-2 rounded-lg border-2 border-pink-300 shadow-lg mb-3">
            {/* Song Title Scrolling Display */}
            <div className="h-6 overflow-hidden">
              <div className="text-pink-300 font-mono text-sm animate-pulse">
                {currentSong.title}
              </div>
              <div className="text-pink-400 font-mono text-xs opacity-75">
                {currentSong.artist}
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between mt-2">
              <span className="text-pink-300 font-mono text-xs">
                {formatTime(currentTime)}
              </span>
              <span className="text-pink-300 font-mono text-xs">
                {formatTime(duration)}
              </span>
            </div>

            {/* Visualizer bars (fake) */}
            <div className="flex gap-[2px] h-8 items-end mt-2">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-pink-500 to-purple-400 animate-pulse"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Album Cover */}
          <div className="flex gap-2 mb-3">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-20 h-20 object-cover border-2 border-pink-300 rounded-lg shadow-md"
            />
            <div className="flex-1 bg-gradient-to-br from-purple-800 to-pink-800 border-2 border-pink-300 rounded-lg p-1 shadow-md">
              <div className="text-pink-200 font-mono text-[10px] leading-tight">
                <div className="truncate">Title: {currentSong.title}</div>
                <div className="truncate">Artist: {currentSong.artist}</div>
                <div className="mt-1">Bitrate: 320 kbps</div>
                <div>Freq: 44100 Hz</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => {
                const time = Number(e.target.value);
                setCurrentTime(time);
                if (audioRef.current) {
                  audioRef.current.currentTime = time;
                }
              }}
              className="w-full h-2 appearance-none bg-purple-800 rounded-full cursor-pointer"
              style={{
                accentColor: "#ec4899",
              }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-pink-200 to-purple-200 p-3 rounded-xl border-2 border-pink-300 shadow-lg">
            <button
              onClick={prevSong}
              className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 border-2 border-pink-200 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md active:shadow-inner transition-all"
            >
              ⏮
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 border-2 border-pink-200 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg active:shadow-inner transition-all"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button
              onClick={nextSong}
              className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 border-2 border-pink-200 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md active:shadow-inner transition-all"
            >
              ⏭
            </button>
          </div>

          {/* EQ-like sliders (decorative) */}
          <div className="flex gap-1 justify-center mt-3 p-2 bg-gradient-to-br from-purple-900 to-pink-900 border-2 border-pink-300 rounded-lg shadow-lg">
            {[60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000].map(
              (freq) => (
                <div key={freq} className="flex flex-col items-center">
                  <div className="w-1 h-8 bg-gradient-to-t from-purple-700 via-pink-500 to-pink-300 rounded-full" />
                  <span className="text-[6px] text-pink-300 mt-1">
                    {freq > 1000 ? `${freq / 1000}k` : freq}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
