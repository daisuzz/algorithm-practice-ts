/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if(numRows === 1) return s;
    // listをnumRows分持つ配列を用意
    const arr = new Array(numRows).fill("");
    // 配列の先頭から順に文字を追加
    let i = 0;
    let forward = true;
    for (const c of s) {
        arr[i] += c;
        if (forward) {
            // 末尾に向かっている場合
            i++;
            if (i === numRows - 1) {
                // 配列の末尾の場合
                forward = false;
            }
        } else {
            // 先頭に向かっている場合
            i--;
            if (i === 0) {
                // 配列の先頭の場合
                forward = true;
            }
        }
    }
    return arr.join("");
}
// @lc code=end
