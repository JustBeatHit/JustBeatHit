export interface LyricLine {
    time: number;
    text: string;
}

export const parseLRC = (lrcContent: string): LyricLine[] => {
    const lines = lrcContent.split('\n');
    const lyrics: LyricLine[] = [];

    const timeRegex = /\[(\d+):(\d+).(\d+)\]/;

    lines.forEach(line => {
        const timeMatch = line.match(timeRegex);
        if (timeMatch) {
            const minutes = parseInt(timeMatch[1], 10);
            const seconds = parseInt(timeMatch[2], 10);
            const milliseconds = parseInt(timeMatch[3], 10);
            const time = minutes * 60 + seconds + milliseconds / 1000;
            const text = line.replace(timeRegex, '').trim();
            lyrics.push({ time, text });
        }
    });

    return lyrics;
};
