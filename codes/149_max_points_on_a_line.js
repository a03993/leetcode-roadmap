/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let maxCount = 0;

    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        let overlap = 0;
        let count = 0;

        const [x1, y1] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];

            let dx = x2 - x1;
            let dy = y2 - y1;

            if (dx == 0 && dy == 0) {
                overlap++;
                continue;
            }

            // greatest common divisor
            function gcd(a, b) {
                while (b != 0) {
                    const temp = b;
                    b = a % b;
                    a = temp;
                }

                return a;
            }

            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            const key = `${dy}/${dx}`;

            map.set(key, (map.get(key) || 0) + 1);
            count = Math.max(count, map.get(key));
        }

        maxCount = Math.max(maxCount, count + overlap + 1);
    }

    return maxCount;
};
