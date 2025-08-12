import { type ISyllable } from "@/common/types.ts";

const syllablesBase: ISyllable[] = [
    { spelling: 'a', symbol: 'あ' },
    { spelling: 'i', symbol: 'い' },
    { spelling: 'u', symbol: 'う' },
    { spelling: 'e', symbol: 'え' },
    { spelling: 'o', symbol: 'お' },
    { spelling: 'ka', symbol: 'か' },
    { spelling: 'ki', symbol: 'き' },
    { spelling: 'ku', symbol: 'く' },
    { spelling: 'ke', symbol: 'け' },
    { spelling: 'ko', symbol: 'こ' },
    { spelling: 'sa', symbol: 'さ' },
    { spelling: 'shi', symbol: 'し' },
    { spelling: 'su', symbol: 'す' },
    { spelling: 'se', symbol: 'せ' },
    { spelling: 'so', symbol: 'そ' },
    { spelling: 'ta', symbol: 'た' },
    { spelling: 'chi', symbol: 'ち' },
    { spelling: 'tsu', symbol: 'つ' },
    { spelling: 'te', symbol: 'て' },
    { spelling: 'to', symbol: 'と' },
    { spelling: 'na', symbol: 'な' },
    { spelling: 'ni', symbol: 'に' },
    { spelling: 'nu', symbol: 'ぬ' },
    { spelling: 'ne', symbol: 'ね' },
    { spelling: 'no', symbol: 'の' },
    { spelling: 'ha', symbol: 'は' },
    { spelling: 'hi', symbol: 'ひ' },
    { spelling: 'fu', symbol: 'ふ' },
    { spelling: 'he', symbol: 'へ' },
    { spelling: 'ho', symbol: 'ほ' },
    { spelling: 'ma', symbol: 'ま' },
    { spelling: 'mi', symbol: 'み' },
    { spelling: 'mu', symbol: 'む' },
    { spelling: 'me', symbol: 'め' },
    { spelling: 'mo', symbol: 'も' },
    { spelling: 'ya', symbol: 'や' },
    { spelling: 'yu', symbol: 'ゆ' },
    { spelling: 'yo', symbol: 'よ' },
    { spelling: 'ra', symbol: 'ら' },
    { spelling: 'ri', symbol: 'り' },
    { spelling: 'ru', symbol: 'る' },
    { spelling: 're', symbol: 'れ' },
    { spelling: 'ro', symbol: 'ろ' },
    { spelling: 'wa', symbol: 'わ' },
    { spelling: 'wo', symbol: 'を' },
    { spelling: 'n', symbol: 'ん' }
];

export function generateQuiz(): ISyllable[] {
    let quiz: ISyllable[] = [];

    for (let i: number = 0; i < 10; i++)
        quiz.push(syllablesBase[Math.floor(Math.random() * syllablesBase.length)]);

    return quiz;
}