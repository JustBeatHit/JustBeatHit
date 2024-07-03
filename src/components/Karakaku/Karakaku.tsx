import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { parseLRC, LyricLine } from '../../utils/LrcParser';
import { loadLRCFile } from '../../utils/LrcLoader';
import '../../stylesheets/karakaku.scss';

const Karakaku: React.FC = () => {
    const { songName } = useParams<{ songName: string }>();
    const [lyrics, setLyrics] = useState<LyricLine[]>([]);
    const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const audioPlayerRef = useRef<ReactAudioPlayer>(null);

    useEffect(() => {
        const loadLyrics = async () => {
            try {
                const lrcContent = await loadLRCFile(`/songs/${songName}/lyrics.lrc`);
                setLyrics(parseLRC(lrcContent));
            } catch (error) {
                console.error('Failed to load LRC file:', error);
            }
        };

        loadLyrics();
    }, [songName]);

    const handleTimeUpdate = () => {
        const audioEl = audioPlayerRef.current?.audioEl.current;
        if (audioEl) {
            const currentTime = audioEl.currentTime;
            const nextLyricTime = lyrics[currentLyricIndex + 1]?.time;

            if (nextLyricTime && currentTime >= nextLyricTime - 0.05) {
                if (!isValidated) {
                    audioEl.pause();
                } else {
                    setUserInput('');
                    setCurrentLyricIndex(currentLyricIndex + 1);
                    setIsValidated(false);
                }
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        if (!lyrics[currentLyricIndex]) return;

        const currentLyric = lyrics[currentLyricIndex].text;
        const nextExpectedChar = currentLyric[userInput.length + 1];

        if (nextExpectedChar === ' ' && inputValue[userInput.length] !== ' ') {
            inputValue += ' ';
        }

        setUserInput(inputValue);
        console.log(currentLyric[userInput.length + 1])

        if (inputValue.trim().toLowerCase() === currentLyric.trim().toLowerCase()) {
            setIsValidated(true);
            if (audioPlayerRef.current?.audioEl.current && audioPlayerRef.current.audioEl.current.paused) {
                audioPlayerRef.current.audioEl.current.play();
            }
        }
    };

    const getStyledText = () => {
        const currentLyric = lyrics[currentLyricIndex]?.text || '';
        return currentLyric.split('').map((char, index) => {
            let className = '';
            if (index < userInput.length) {
                className = userInput[index].toLowerCase() === char.toLowerCase() ? 'right' : 'wrong';
            }
            return (
                <span key={index} className={className}>
                    {char}
                </span>
            );
        });
    };

    const renderLyrics = () => {
        return lyrics.map((lyric, index) => (
            <div key={index} className={`lyric-line ${index === currentLyricIndex ? 'current' : ''}`}>
                {index === currentLyricIndex - 1 && <p className="previous">{lyrics[index].text}</p>}
                {index === currentLyricIndex && (
                    <div className="current-lyric-container">
                        <p className="current-lyric">{getStyledText()}</p>
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            className="text-input"
                            autoFocus
                            spellCheck={false}
                        />
                    </div>
                )}
                {index === currentLyricIndex + 1 && <p className="next">{lyrics[index].text}</p>}
            </div>
        ));
    };

    const handlePlayPauseClick = () => {
        const audioEl = audioPlayerRef.current?.audioEl.current;
        if (audioEl) {
            if (audioEl.paused) {
                audioEl.play();
            } else {
                audioEl.pause();
            }
        }
    };

    return (
        <div className="karakaku">
            <ReactAudioPlayer
                src={`/songs/${songName}/song.mp3`}
                controls
                onListen={handleTimeUpdate}
                ref={audioPlayerRef}
                listenInterval={100}
            />
            <button onClick={handlePlayPauseClick} className="game-start">
                {audioPlayerRef.current?.audioEl.current?.paused ? 'Play' : 'Pause'}
            </button>
            <div className="lyrics">
                {renderLyrics()}
            </div>
        </div>
    );
};

export default Karakaku;
