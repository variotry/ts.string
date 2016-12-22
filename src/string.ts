/*!
 * Utility functions of string
 * (c) vario
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

namespace variotry.string
{
	/**
	 * ランダムな文字列を生成する
	 * @param length	生成文字列の長さ
	 * @param pattern	生成文字に含まれる文字パターン。数値のみなら /[0-9]/など。
	 * @author vario.
	 */
	export function random( length: number = 10, pattern: RegExp = null ): string
	{
		let res = "";
		let minAsciiCode = 33;
		let maxAsciiCode = 126

		let i = 0;
		const limitLoop = 1000;

		// patternのミスによる無限ループ防止用のカウンタ変数
		let loop = 0;

		while ( i < length )
		{
			if ( limitLoop <= loop )
			{
				throw limitLoop + "回のループで文字列を生成出来ませんでした。patternに問題が無いか確認して下さい。";
			}
			++loop;

			let asciiCode = Math.floor( Math.random() * ( maxAsciiCode - minAsciiCode + 1 ) + minAsciiCode );
			let c = String.fromCharCode( asciiCode );
			if ( pattern && !c.match( pattern ) )
			{
				continue;
			}

			res += c;
			++i;
		}

		return res;
	}

	/**
	 * 数値を全角数字の文字列にする
	 * @param v				入力数値
	 * @param separator		3桁毎に区切る文字
	 */
	export function fullWidthNum( v: number, separator: string = "，" ): string
	{
		if ( v === 0 )
		{
			return "０";
		}
		let res = "";
		let i = 0;
		let s = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
		while ( 1 <= v )
		{
			if ( i != 0 && i % 3 === 0 )
			{
				res = separator + res;
			}
			let d = v % 10;
			v = Math.floor( v / 10 );
			res = s[d] + res;
			++i;
		}
		return res;
	}

	/**
	 * 正規表現で扱う文字をエスケープする
	 * @param s	入力文字
	 */
	export function regexEscape( s: string ): string
	{
		return s.replace( /(\.|\-|\+|\*|\{|\}|\$|\^|\[|\]|\||\\)/g, "\\$1" );
	}
}
