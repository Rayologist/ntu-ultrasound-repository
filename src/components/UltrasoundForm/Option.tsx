import { SelectItem } from "@mantine/core/lib/components/Select/types";
import { OptionType } from "types";

export const languageOptions: SelectItem[] = [
  { label: "Mandarin Taiwan", value: "mandarin-taiwan" },
  { label: "Mandarin Beijing", value: "mandarin-mainland" },
  { label: "Squliq Atayal", value: "squliq-atayal" },
];

export const typeOptions: OptionType[] = [
  { label: "Consonant", value: "consonant" },
  { label: "Vowel (Monophthong)", value: "vowel" },
];

export const vowelMandarinOptions: SelectItem[] = [
  { label: "a", value: "a" },
  { label: "i", value: "i" },
  { label: "u", value: "u" },
  { label: "e", value: "e" },
  // { label: "o", value: "o" },
  { label: "y", value: "y" },
];

export const vowelSquliqOptions: SelectItem[] = [
  { label: "ə", value: "ə" },
  { label: "o", value: "o" },
  { label: "e", value: "e" },
  { label: "i", value: "i" },
  { label: "u", value: "u" },
  { label: "ɨ", value: "ɨ" },
  { label: "a", value: "a" },
];

export const consonantSquliqOptions: SelectItem[] = [
  { label: "ɣ", value: "ɣ" },
  { label: "ʔ", value: "ʔ" },
  { label: "n", value: "n" },
  { label: "ʦ", value: "ʦ" },
  { label: "q", value: "q" },
  { label: "s", value: "s" },
  { label: "ŋ", value: "ŋ" },
  { label: "l", value: "l" },
  { label: "r", value: "r" },
  { label: "j", value: "j" },
  { label: "x", value: "x" },
  { label: "z", value: "z" },
  { label: "t", value: "t" },
  { label: "k", value: "k" },
  { label: "ħ", value: "ħ" },
];

export const consonantMandarinOptions: SelectItem[] = [
  { label: "p", value: "b", disabled: true },
  { label: "pʰ", value: "p", disabled: true },
  { label: "m", value: "m", disabled: true },
  { label: "f", value: "f", disabled: true },
  { label: "t", value: "d" },
  { label: "tʰ", value: "t" },
  { label: "n", value: "n" },
  { label: "l", value: "l" },
  { label: "k", value: "g" },
  { label: "kʰ", value: "k" },
  { label: "h", value: "h", disabled: true },
  { label: "tɕ", value: "j" },
  { label: "tɕʰ", value: "q" },
  { label: "ɕ", value: "x" },
  { label: "tʂ", value: "zh" },
  { label: "tʂʰ", value: "ch" },
  { label: "ʂ", value: "sh" },
  { label: "ʐ", value: "r" },
  { label: "ts", value: "z" },
  { label: "tsʰ", value: "c" },
  { label: "s", value: "s" },
  { label: "ŋ", value: "ng" },
  { label: "ɚ", value: "er" },
];

export const consonantOptions: SelectItem[] = [
  { label: "ㄅ/p/b", value: "b", disabled: true },
  { label: "ㄆ/pʰ/p", value: "p", disabled: true },
  { label: "ㄇ/m/m", value: "m", disabled: true },
  { label: "ㄈ/f/f", value: "f", disabled: true },
  { label: "ㄉ/t/d", value: "d" },
  { label: "ㄊ/tʰ/t", value: "t" },
  { label: "ㄋ/n/n", value: "n" },
  { label: "ㄌ/l/l", value: "l" },
  { label: "ㄍ", value: "g" },
  { label: "ㄎ", value: "k" },
  { label: "ㄏ", value: "h", disabled: true },
  { label: "ㄐ", value: "j" },
  { label: "ㄑ", value: "q" },
  { label: "ㄒ", value: "x" },
  { label: "ㄓ", value: "zh" },
  { label: "ㄔ", value: "ch" },
  { label: "ㄕ", value: "sh" },
  { label: "ㄖ", value: "r" },
  { label: "ㄗ", value: "z" },
  { label: "ㄘ", value: "c" },
  { label: "ㄙ", value: "s" },
  { label: "ㄧ", value: "yi" },
  { label: "ㄨ", value: "wu" },
  { label: "ㄩ", value: "yu" },
  { label: "ㄚ", value: "a" },
  { label: "ㄛ", value: "o" },
  { label: "ㄜ", value: "e" },
  { label: "ㄝ", value: "ê" },
  { label: "ㄞ", value: "ai" },
  { label: "ㄟ", value: "ei" },
  { label: "ㄠ", value: "ao" },
  { label: "ㄡ", value: "ou" },
  { label: "ㄢ", value: "an" },
  { label: "ㄣ", value: "en" },
  { label: "ㄤ", value: "ang" },
  { label: "ㄥ", value: "eng" },
  { label: "ㄦ", value: "er" },
];
