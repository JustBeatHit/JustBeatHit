'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { parseLRC, LyricLine } from '@/utils/LrcParser';
import { loadLRCFile } from '@/utils/LrcLoader';
import '@/stylesheets/karakaku.scss';
import Link from 'next/link';

import { useLyrics } from './utils/useLyrics';
import {useCaretPosition} from "./utils/useCaretPosition";

// Normalise les chaînes et remplace les "oe" par "œ" et supprime les accents
const normalizeString = (str: string): string => {
    return str
        .replace(/oe/g, 'œ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
};

// Enlève les segments entre parenthèses dans les lignes de paroles
const removeParentheses = (str: string): string => {
    return str.replace(/\(.*?\)/g, '').trim();
};

interface KarakakuProps {
    songName: string;
}

const Karakaku: React.FC<KarakakuProps> = ({ songName }) => {
    const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const [lockedChars, setLockedChars] = useState<string>('');
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const audioPlayerRef = useRef<ReactAudioPlayer>(null);
    const charRefs = useRef<(HTMLSpanElement | null)[][]>([]);
    const caretRef = useRef<HTMLDivElement>(null);
    const [score, setScore] = useState<number>(0);
    const [lastScoreChange, setLastScoreChange] = useState<number>(0);
    const [hasErrors, setHasErrors] = useState<boolean>(false);
    const [pauseCount, setPauseCount] = useState<number>(0);
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [incorrectCharacters, setIncorrectCharacters] = useState<number>(0);
    const [totalCharacters, setTotalCharacters] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    let [isMusicFinished, setIsMusicFinished] = useState<boolean>(false);

    const { lyrics, totalLines } = useLyrics(songName, parseLRC);

    useEffect(() => {
        // Initialise les références aux caractères lorsque les paroles changent
        charRefs.current = lyrics.map(() => []);
    }, [lyrics]);

    useCaretPosition({
        userInput,
        currentLyricIndex,
        lyrics,
        charRefs,
        caretRef
    });
    const handleTimeUpdate = () => {
        const audioEl = audioPlayerRef.current?.audioEl.current;
        if (audioEl) {
            const currentTime = audioEl.currentTime;
            const nextLyricTime = lyrics[currentLyricIndex + 1]?.time;

            if (nextLyricTime && currentTime >= nextLyricTime - 0.05) {
                if (!isValidated) {
                    audioEl.pause();
                    const points = -500;
                    handlePause();
                    setScore(prevScore => {
                        const newScore = Math.max(prevScore + points, 0);
                        setLastScoreChange(points);
                        return newScore;
                    });
                } else {
                    setUserInput('');
                    setLockedChars('');
                    setCurrentLyricIndex(currentLyricIndex + 1);
                    setIsValidated(false);
                    setHasErrors(false);
                }
            }
            const handleAudioEnded = () => {
                setIsMusicFinished(true);
            };
            audioEl.addEventListener('ended', handleAudioEnded);
            return () => {
                audioEl.removeEventListener('ended', handleAudioEnded);
            };
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        if (!lyrics[currentLyricIndex]) return;

        const currentLyric = lyrics[currentLyricIndex].text;
        const autoCompleteChars = [' ', '.', ',', '!', '?', ';', ':', '-', '(', ')', '"', "'"];

        // Remplacer 'oe' par 'œ'
        inputValue = inputValue.replace(/oe/g, 'œ');

        let userInputUpdated = inputValue;

        if (inputValue.length < userInput.length) {
            if (inputValue.length < lockedChars.length) {
                setUserInput(lockedChars);
                return;
            } else {
                setUserInput(inputValue);
                return;
            }
        }

        while (autoCompleteChars.includes(currentLyric[userInputUpdated.length])) {
            userInputUpdated += currentLyric[userInputUpdated.length];
        }

        const correctPortion = currentLyric.slice(0, userInputUpdated.length);
        const userTypedPortion = userInputUpdated.slice(0, correctPortion.length);

        if (normalizeString(userTypedPortion) === normalizeString(correctPortion)) {
            setLockedChars(userInputUpdated);
            const points = 100;
            setScore(prevScore => {
                const newScore = prevScore + points;
                setLastScoreChange(points);
                return newScore;
            });
        } else {
            const points = -300;
            setScore(prevScore => {
                const newScore = Math.max(prevScore + points, 0);
                setLastScoreChange(points);
                return newScore;
            });
            setIncorrectCharacters(incorrectCharacters => incorrectCharacters + 1);
            setHasErrors(true);
        }

        setUserInput(userInputUpdated);

        if (normalizeString(userInputUpdated.trim()) === normalizeString(currentLyric.trim())) {
            setIsValidated(true);
            if (!hasErrors) {
                const points = 500;
                setScore(prevScore => {
                    const newScore = prevScore + points;
                    setLastScoreChange(points);
                    return newScore;
                });
            }

            const alphabeticCharacters = userInputUpdated.match(/[a-zA-Z]/g);
            if (alphabeticCharacters) {
                setTotalCharacters(totalCharacters => totalCharacters + alphabeticCharacters.length);
            }

            if (currentLyricIndex === lyrics.length - 1) {
                setEndTime(Date.now());
            } else if (audioPlayerRef.current?.audioEl.current && audioPlayerRef.current.audioEl.current.paused) {
                audioPlayerRef.current.audioEl.current.play();
            }
        }

        if (!isStarted && audioPlayerRef.current?.audioEl.current?.paused) {
            audioPlayerRef.current.audioEl.current.play();
            setIsStarted(true);
            setStartTime(Date.now());
        }
    };

    const handlePause = () => {
        setPauseCount(prevCount => prevCount + 1);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
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
                <span key={index} className={className} ref={el => { charRefs.current[currentLyricIndex][index] = el; }}>
                    {char}
                </span>
            );
        });
    };

    useEffect(() => {
        if (currentLyricIndex === lyrics.length - 1 && (isValidated && isMusicFinished)) {
            setIsStarted(false);
            setIsGameOver(true);
        }
    }, [currentLyricIndex, isValidated, lyrics.length, isMusicFinished]);

    const calculateWPM = (): number => {
        if (!startTime || !endTime || endTime <= startTime) {
            return 0;
        }

        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const words = lyrics.reduce((acc, lyric) => acc + lyric.text.split(' ').length, 0);
        const wpm = (words / elapsedTimeInSeconds) * 60;
        return Math.round(wpm);
    };

    const calculateAccuracy = (): number => {
        if (!userInput || userInput.length === 0) {
            return 0;
        }
        const accuracy = ((totalCharacters - incorrectCharacters) / totalCharacters) * 100;
        return Math.round(accuracy);
    };

    const handleReplay = () => {
        setCurrentLyricIndex(0);
        setUserInput('');
        setIsValidated(false);
        setLockedChars('');
        setIsStarted(false);
        setIsGameOver(false);
        setIsMusicFinished(false);
        setScore(0);
        setLastScoreChange(0);
        setHasErrors(false);
        setPauseCount(0);
        setStartTime(0);
        setEndTime(0);
        setIncorrectCharacters(0);
        setTotalCharacters(0);
        audioPlayerRef.current?.audioEl.current?.load();
    };

    const renderLyrics = () => {
        if ((currentLyricIndex === lyrics.length - 1 && isValidated) && isGameOver) {
            return (
                <div className="final-score">
                    <p>Score final: {score}</p>
                    <p>Nombre de lignes en pause : {pauseCount} pauses / {totalLines} lignes</p>
                    <p>Vitesse de frappe : {calculateWPM()} mots par minute</p>
                    <p>Précision d'écriture : {calculateAccuracy()}%</p>
                    <div className="btn-list">
                        <button className="btn-primary" onClick={handleReplay}>Rejouer</button>
                        <Link href="/karakaku">
                            <button className="btn-secondary">Retour choix de musiques</button>
                        </Link>
                    </div>
                </div>
            );
        }

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
                            onPaste={handlePaste}
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
            {!isGameOver && (
                <>
                    <ReactAudioPlayer
                        src={`/songs/${songName}/song.mp3`}
                        controls
                        onListen={handleTimeUpdate}
                        ref={audioPlayerRef}
                        listenInterval={100}
                    />
                    {!isStarted && (
                        <button onClick={handlePlayPauseClick} className="btn-primary">
                            {audioPlayerRef.current?.audioEl.current?.paused ? 'Play' : 'Pause'}
                        </button>
                    )}
                    <div className="score">
                        <p>Score : {score} ({lastScoreChange > 0 ? '+' : ''}{lastScoreChange})</p>
                    </div>
                </>
            )}
            <div className="lyrics">
                {renderLyrics()}
            </div>
        </div>
    );
};

export default Karakaku;