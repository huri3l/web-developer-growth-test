"use client";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Play } from "../assets/play";
import { ProgressBar } from "../assets/progress-bar";

interface CustomAudioPlayerProps {
  title: string;
  url: string;
}

export function CustomAudioPlayer({ title, url }: CustomAudioPlayerProps) {
  const [progressColors, setProgressColors] = useState(
    Array(56).fill("#474747")
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setProgress] = useState(0);
  const [, setSelectedFile] = useState<File | null>(null);
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

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

  const totalSegments = 56;

  const calculateProgressColors = (currentTime: number, duration: number) => {
    const progressPercentage = currentTime / duration;
    const filledSegments = Math.floor(progressPercentage * totalSegments);

    return Array(totalSegments)
      .fill("#474747")
      .map((color, index) => (index < filledSegments ? "white" : color));
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      const colors = calculateProgressColors(currentTime, duration);
      setProgressColors(colors);
    }
  };

  const handleProgressClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;

      if (isNaN(duration) || !isFinite(duration)) {
        return;
      }

      const rect = (e.target as HTMLDivElement).getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const clickRatio = clickPosition / rect.width;

      const newTime = clickRatio * duration;
      if (newTime >= 0 && newTime <= duration) {
        audioRef.current.currentTime = newTime;
        setProgress((newTime / duration) * 100);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      audioRef.current!.src = objectURL;
      setSelectedFile(file);
      setIsPlaying(true);
    }
  };

  return (
    <div className="text-left w-fit">
      <h4 className="text-xs text-muted-foreground mb-3">{title}</h4>
      <div className="border border-border rounded-xl p-3">
        <audio
          ref={audioRef}
          src={url}
          onTimeUpdate={updateProgress}
          onEnded={() => setIsPlaying(false)}
          hidden
        />
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="min-w-12 min-h-12 flex items-center justify-center bg-white rounded-full"
          >
            <Play />
          </button>
          <div onClick={handleProgressClick} className="w-fit">
            <ProgressBar className="w-full" progressColors={progressColors} />
          </div>

          <div className="w-32 h-full flex items-center gap-4">
            <div className="h-10 w-px bg-muted-foreground" />
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer text-center text-muted-foreground"
            >
              {locale === "pt"
                ? "Insira sua própria música"
                : "Upload your own track"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
