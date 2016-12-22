/*!
 * Utility functions of string
 * (c) vario
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
declare namespace variotry.string {
    /**
     * ランダムな文字列を生成する
     * @param length	生成文字列の長さ
     * @param pattern	生成文字に含まれる文字パターン。数値のみなら /[0-9]/など。
     * @author vario.
     */
    function random(length?: number, pattern?: RegExp): string;
    /**
     * 数値を全角数字の文字列にする
     * @param v				入力数値
     * @param separator		3桁毎に区切る文字
     */
    function fullWidthNum(v: number, separator?: string): string;
    /**
     * 正規表現で扱う文字をエスケープする
     * @param s	入力文字
     */
    function regexEscape(s: string): string;
}
