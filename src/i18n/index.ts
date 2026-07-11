// 多言語対応の中核。対応言語・翻訳ヘルパー・言語別パス生成をここに集約する。
// 言語を増やすときは Lang / LANGS と各データの Loc フィールド、ui.ts を追加すればよい。

export type Lang = "ja" | "en";

export const LANGS: Lang[] = ["ja", "en"];
export const DEFAULT_LANG: Lang = "ja";

/** 言語ごとに文言を持つ翻訳フィールド */
export type Loc = { ja: string; en: string };
/** 言語ごとに文言リストを持つ翻訳フィールド（featured の特徴など） */
export type LocList = { ja: string[]; en: string[] };

/** その言語のトップURLの基準パス（ja=/, en=/en/） */
export const langBase = (lang: Lang): string => (lang === DEFAULT_LANG ? "/" : `/${lang}/`);

/** 翻訳フィールドから現在の言語の値を取り出す。未指定言語は日本語にフォールバック。 */
export const t = (field: Loc, lang: Lang): string => field[lang] ?? field.ja;
export const tList = (field: LocList, lang: Lang): string[] => field[lang] ?? field.ja;
