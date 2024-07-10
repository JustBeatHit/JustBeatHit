import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { parseLRC, LyricLine } from '../../utils/LrcParser';
import { loadLRCFile } from '../../utils/LrcLoader';
import '../../stylesheets/karakaku.scss';

// Normalise les chaînes et supprime les accents
const normalizeString = (str: string): string => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

const Karakaku: React.FC = () => {
    const { songName } = useParams<{ songName: string }>();
    const [lyrics, setLyrics] = useState<LyricLine[]>([]);
    const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const [lockedChars, setLockedChars] = useState<string>('');
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const audioPlayerRef = useRef<ReactAudioPlayer>(null);
    const charRefs = useRef<(HTMLSpanElement | null)[][]>([]);
    const caretRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        // Initialise les références aux caractères lorsque les paroles changent
        charRefs.current = lyrics.map(() => []);
    }, [lyrics]);

    useEffect(() => {
        // Mettre à jour la position du caret
        const updateCaretPosition = () => {
            const currentCharIndex = userInput.length;
            const charRef = charRefs.current[currentLyricIndex]?.[currentCharIndex];
            const currentLyric = lyrics[currentLyricIndex]?.text || '';

            if (currentCharIndex === currentLyric.length) {
                // Positionner le caret après la dernière lettre
                const lastCharRef = charRefs.current[currentLyricIndex]?.[currentCharIndex - 1];
                if (lastCharRef && caretRef.current) {
                    const rect = lastCharRef.getBoundingClientRect();
                    const parentRect = lastCharRef.parentElement?.getBoundingClientRect();
                    if (rect && parentRect) {
                        caretRef.current.style.left = `${rect.right - parentRect.left}px`;
                        caretRef.current.style.top = `${rect.top - parentRect.top}px`;
                    }
                }
            } else if (charRef && caretRef.current) {
                const rect = charRef.getBoundingClientRect();
                const parentRect = charRef.parentElement?.getBoundingClientRect();
                if (rect && parentRect) {
                    caretRef.current.style.left = `${rect.left - parentRect.left}px`;
                    caretRef.current.style.top = `${rect.top - parentRect.top}px`;
                }
            }
        };

        updateCaretPosition();
    }, [userInput, currentLyricIndex, lyrics]);

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
                    setLockedChars('');
                    setCurrentLyricIndex(currentLyricIndex + 1);
                    setIsValidated(false);
                }
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (!lyrics[currentLyricIndex]) return;

        const currentLyric = lyrics[currentLyricIndex].text;
        const autoCompleteChars = [' ', '.', ',', '!', '?', ';', ':', '-', '(', ')', '"', "'"];
        let userInputUpdated = inputValue;

        // Vérifie si l'utilisateur a supprimé un caractère
        if (inputValue.length < userInput.length) {
            // Empêche la suppression des caractères verrouillés
            if (inputValue.length < lockedChars.length) {
                setUserInput(lockedChars);
                return;
            } else {
                setUserInput(inputValue);
                return;
            }
        }

        // Autocompléte les caractères si le prochain caractère est spécial
        while (autoCompleteChars.includes(currentLyric[userInputUpdated.length])) {
            userInputUpdated += currentLyric[userInputUpdated.length];
        }

        // Verrouille les caractères correctement tapés
        const correctPortion = currentLyric.slice(0, userInputUpdated.length);
        const userTypedPortion = userInputUpdated.slice(0, correctPortion.length);
        if (normalizeString(userTypedPortion) === normalizeString(correctPortion)) {
            setLockedChars(userInputUpdated);
        }

        setUserInput(userInputUpdated);

        if (normalizeString(userInputUpdated.trim()) === normalizeString(currentLyric.trim())) {
            setIsValidated(true);
            // Redémarre l'audio si en pause
            if (audioPlayerRef.current?.audioEl.current && audioPlayerRef.current.audioEl.current.paused) {
                audioPlayerRef.current.audioEl.current.play();
            }
        }

        if (!isStarted && audioPlayerRef.current?.audioEl.current?.paused) {
            audioPlayerRef.current.audioEl.current.play();
            setIsStarted(true);
        }
    };

    const getStyledText = () => {
        const currentLyric = lyrics[currentLyricIndex]?.text || '';
        return currentLyric.split('').map((char, index) => {
            let className = '';
            if (index < userInput.length) {
                className = normalizeString(userInput[index]) === normalizeString(char) ? 'right' : 'wrong';
            }

            if (!charRefs.current[currentLyricIndex]) {
                charRefs.current[currentLyricIndex] = [];
            }
            return (
                <span key={index} className={className} ref={el => charRefs.current[currentLyricIndex][index] = el}>
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
                        <div ref={caretRef} className="caret"></div>
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
                setIsStarted(true);
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