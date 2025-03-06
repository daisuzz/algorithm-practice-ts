/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    const row = new Set();
    const col = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j]
            if(c === '.') continue;
            if(row.has(c)) return false;
            row.add(c)
        }
        row.clear();
    }
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const c = board[j][i];
            if(c === '.') continue;
            if(col.has(c)) return false;
            col.add(c);
        }
        col.clear();
    }
    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            for(let k = 0; k < 9; k++) {
                const c = board[i + Math.floor(k / 3)][j + k % 3];
                if(c === '.') continue;
                if(row.has(c)) return false;
                row.add(c);
            }
            row.clear();
        }
    }
    return true;
};
// @lc code=end

