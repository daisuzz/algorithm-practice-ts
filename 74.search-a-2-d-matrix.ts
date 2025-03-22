/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {

    // targetが含まれるmを探索
    let mStartIndex = 0
    let mLastIndex = matrix.length - 1
    let targetRowIndex = 0
    while (mStartIndex <= mLastIndex) {
        const mMidIndex = Math.floor((mStartIndex + mLastIndex) / 2)
        const first = matrix[mMidIndex][0]
        const last = matrix[mMidIndex][matrix[mMidIndex].length - 1]
        if (first == target || last == target) {
            return true
        } else if (first < target && target < last) {
            // その列を探索
            targetRowIndex = mMidIndex
            break
        } else if (first < target) {
            mStartIndex = mMidIndex + 1
        } else {
            mLastIndex = mMidIndex - 1
        }
    }
    // mの中でtargetが含まれるか探索
    let nStartIndex = 0
    let nLastIndex = matrix[targetRowIndex].length - 1
    while (nStartIndex <= nLastIndex) {
        const nMidIndex = Math.floor((nStartIndex + nLastIndex) / 2)
        if (matrix[targetRowIndex][nMidIndex] == target) {
            return true
        } else if (matrix[targetRowIndex][nMidIndex] < target) {
            nStartIndex = nMidIndex + 1
        } else {
            nLastIndex = nMidIndex - 1
        }
    }
    return false
};
// @lc code=end
