/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {

    // targetが含まれるmを探索(log(m))
    let mStartIndex = 0
    let mLastIndex = matrix.length - 1
    let targetRowIndex = 0
    while (mStartIndex <= mLastIndex) {
        const mMidIndex = Math.floor((mStartIndex + mLastIndex) / 2)
        const first = matrix[mMidIndex][0]
        const last = matrix[mMidIndex][matrix[mMidIndex].length - 1]
    
        if (first == target || last == target) {
            // targetが対象の列の最初か最後にある場合
            return true
        } else if (first < target && target < last) {
            // targetが対象の列に含まれている可能性がある場合
            targetRowIndex = mMidIndex
            break
        } else if (first < target) {
            // targetが対象の列よりも下にある場合
            mStartIndex = mMidIndex + 1
        } else {
            // targetが対象の列よりも上にある場合
            mLastIndex = mMidIndex - 1
        }
    }
    // mの中でtargetが含まれるか探索(log(n))
    let nStartIndex = 0
    let nLastIndex = matrix[targetRowIndex].length - 1
    while (nStartIndex <= nLastIndex) {
        const nMidIndex = Math.floor((nStartIndex + nLastIndex) / 2)

        if (matrix[targetRowIndex][nMidIndex] == target) {
            // targetが含まれる場合
            return true
        } else if (matrix[targetRowIndex][nMidIndex] < target) {
            // targetが対象の行よりも右にある場合
            nStartIndex = nMidIndex + 1
        } else {
            // targetが対象の行よりも左にある場合
            nLastIndex = nMidIndex - 1
        }
    }
    return false
};
// @lc code=end
