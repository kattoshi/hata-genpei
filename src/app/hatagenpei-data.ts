/** 旗源平の1投目・2投目に対する判定結果。 */
export interface HatagenpeiResult {
  /** 唱え方。 */
  chant: string;
  /** 受け渡しまたは返却する旗の内容。 */
  flags: string;
  /** 得点。 */
  points: number;
  /** 続けてサイコロを振れるか。 */
  canContinue: boolean;
}

const result = (chant: string, flags: string, points: number, canContinue: boolean): HatagenpeiResult => ({
  chant,
  flags,
  points,
  canContinue,
});

/** サイコロの目を順序に依存しないキーへ変換する。 */
export const resultKey = (first: number, second: number): string =>
  [first, second].sort((left, right) => left - right).join('-');

/** 旗源平で使われる全21通りの判定データ。 */
export const HATAGENPEI_RESULTS: Readonly<Record<string, HatagenpeiResult>> = {
  '1-1': result('ちんちんかもかも', '小旗 2本', 2, true),
  '1-2': result('ちんに', '小旗 1本', 1, false),
  '1-3': result('ちんさん', '小旗 1本', 1, false),
  '1-4': result('ちんし', '小旗 1本', 1, false),
  '1-5': result('うめがいち', '中旗 1本', 10, true),
  '1-6': result('ちんろく', '中旗 1本', 10, true),
  '2-2': result('にゃあにゃあ', '小旗 2本', 2, true),
  '2-3': result('にさまのかんかんど', 'なし', 0, false),
  '2-4': result('しのに', '中旗 1本返す', -10, false),
  '2-5': result('ごにごに', 'なし', 0, false),
  '2-6': result('ろくに', '小旗 1本', 1, false),
  '3-3': result('さざなみ', '小旗 2本', 2, true),
  '3-4': result('しさまのかんかんど', 'なし', 0, false),
  '3-5': result('ごさまのかんかんど', 'なし', 0, false),
  '3-6': result('ろくさん', '小旗 1本', 1, false),
  '4-4': result('しゅうじゅう', '小旗 2本', 2, true),
  '4-5': result('ごっしりはなかみ', 'なし', 0, false),
  '4-6': result('しろく', '小旗 1本', 1, false),
  '5-5': result('ごんご', '小旗 2本', 2, true),
  '5-6': result('ごろく', '小旗 1本', 1, false),
  '6-6': result('じょうろく', '小旗 2本', 2, true),
};