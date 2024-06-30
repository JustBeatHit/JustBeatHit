export const loadLRCFile = async (filePath: string): Promise<string> => {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error('Failed to load LRC file');
    }
    return await response.text();
};
