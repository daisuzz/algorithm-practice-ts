/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position
        .map((pos, i) => ({ pos, speed: speed[i] }))
        .sort((a, b) => b.pos - a.pos);
    let reachingTime = 0;
    let fleet = 0;
    for(const car of cars) {
        const time = (target - car.pos) / car.speed;
        if(time > reachingTime){
            reachingTime = time;
            fleet++;
        }
    }
    return fleet;
};
// @lc code=end

