'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { parseLRC } from '@/utils/LrcParser';
import '@/stylesheets/karakaku.scss';
import Link from 'next/link';

import { useLyrics, normalizeString } from './utils/useLyrics';
import { useCaretPosition } from "./utils/useCaretPosition";
import { calculateWPM, calculateAccuracy, calculateScore, calculatePauseCount } from './utils/scoreUtils';
import { handleTimeUpdate } from "./utils/timeUpdateUtils";
import { handleInputChange as handleInputChangeUtil } from './utils/inputChangeUtils';

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
    const { lyrics, totalLines } = useLyrics(songName, charRefs, parseLRC);
    const [isMusicFinished, setIsMusicFinished] = useState<boolean>(false);

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
    const handleTimeUpdateWrapper = () => {
        handleTimeUpdate(
            audioPlayerRef,
            lyrics,
            currentLyricIndex,
            isValidated,
            setUserInput,
            setLockedChars,
            setCurrentLyricIndex,
            setIsValidated,
            setHasErrors,
            setPauseCount,
            calculatePauseCount,
            setScore,
            setLastScoreChange,
            setIsMusicFinished
        );
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChangeUtil(
            e,
            lyrics,
            currentLyricIndex,
            userInput,
            lockedChars,
            setUserInput,
            setLockedChars,
            setScore,
            setLastScoreChange,
            setIncorrectCharacters,
            setHasErrors,
            setIsValidated,
            setTotalCharacters,
            audioPlayerRef,
            setIsStarted,
            setStartTime,
            setEndTime,
            isStarted,
            hasErrors
        );
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
                    <p>Vitesse de frappe : {calculateWPM(startTime, endTime, lyrics)} mots par minute</p>
                    <p>Précision d'écriture : {calculateAccuracy(totalCharacters, incorrectCharacters)}%</p>
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
                        onListen={handleTimeUpdateWrapper}
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