// useLyrics.ts
import { useEffect, useState } from 'react';
import { LyricLine } from '@/utils/LrcParser';
import { loadLRCFile } from '@/utils/LrcLoader';

const removeParentheses = (str: string): string => {
    return str.replace(/\(.*?\)/g, '').trim();
};

export const useLyrics = (songName: string, parseLRC: (content: string) => LyricLine[]) => {
    const [lyrics, setLyrics] = useState<LyricLine[]>([]);
    const [totalLines, setTotalLines] = useState<number>(0);

    useEffect(() => {
        const loadLyrics = async () => {
            try {
                const lrcContent = await loadLRCFile(`/songs/${songName}/lyrics.lrc`);
                const parsedLyrics = parseLRC(lrcContent);
                const cleanedLyrics = parsedLyrics.map(lyric => ({
                    ...lyric,
                    text: removeParentheses(lyric.text),
                }));
                setLyrics(cleanedLyrics);
                setTotalLines(cleanedLyrics.length);
            } catch (error) {
                console.error('Failed to load LRC file:', error);
            }
        };

        loadLyrics();
    }, [songName, parseLRC]);

    return { lyrics, totalLines };
};