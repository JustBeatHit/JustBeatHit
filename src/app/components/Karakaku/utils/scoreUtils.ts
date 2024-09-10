interface Lyric {
    text: string;
}

export const calculateWPM = (startTime: number, endTime: number, lyrics: Lyric[]): number => {
    if (!startTime || !endTime || endTime <= startTime) {
        return 0;
    }

    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    const words = lyrics.reduce((acc, lyric) => acc + lyric.text.split(' ').length, 0);
    const wpm = (words / elapsedTimeInSeconds) * 60;
    return Math.round(wpm);
};

export const calculateAccuracy = (totalCharacters: number, incorrectCharacters: number): number => {
    if (!totalCharacters || totalCharacters === 0) {
        return 0;
    }
    const accuracy = ((totalCharacters - incorrectCharacters) / totalCharacters) * 100;
    return Math.round(accuracy);
};

export const calculateScore = (prevScore: number, points: number): number => {
    return Math.max(prevScore + points, 0);
};

export const calculatePauseCount = (pauseCount: number): number => {
    console.log('pauseCount', pauseCount);
    return pauseCount + 1;
};