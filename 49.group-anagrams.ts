/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    // アナグラムで使われている文字をkey, その文字を使っているアナグラムの集合をvalueとする
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)?.push(str);
    }
    // 同じ文字を使っているアナグラムの集合の一覧を返す
    return Array.from(map.values());
};
// @lc code=end

