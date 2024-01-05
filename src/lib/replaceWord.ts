export function replaceWord(url: string, wordToReplace: string, newWord: string): string {
    const words: string[] = url.split("/");
    const index: number = words.findIndex((word: string) => word.toLowerCase() === wordToReplace.toLowerCase());

    if (index !== -1) {
        words[index] = newWord;
        return words.join("/");
    }

    return url;
}