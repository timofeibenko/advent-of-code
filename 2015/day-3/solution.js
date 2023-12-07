import { input } from './input.js';

const DIRECTIONS = {
	NORTH: '^',
	SOUTH: 'v',
	WEST: '<',
	EAST: '>',
}

const overallPath = input.split('');

const coords = [{ x: 0, y: 0 }];
// const roboSantaCoords = [{ x: 0, y: 0 }];

const humanSantaPath = overallPath.filter((_, i) => i === 0 || i % 2 === 0);
const roboSantaPath = overallPath.filter((_, i) => i % 2 !== 0);

const paths = [humanSantaPath, roboSantaPath];

const getOnceVisitedHousesAmount = (paths) => {
	let visitedAtLeastOnce = 1;

	for (let path of paths) {
		for (let direction of path) {
			const { x: prevX, y: prevY} = coords[coords.length - 1];
			let nextStep;
			
			switch (direction) {
				case (DIRECTIONS.NORTH):
					nextStep = { x: prevX, y: prevY + 1 };
					break;
				case (DIRECTIONS.SOUTH):
					nextStep = { x: prevX, y: prevY - 1 };
					break;
				case (DIRECTIONS.WEST):
					nextStep = { x: prevX + 1, y: prevY };
					break;
				case (DIRECTIONS.EAST):
					nextStep = { x: prevX - 1, y: prevY };
					break;
				default:
					throw new Error('something went wrong at switch statement');
			}

			const { x: lastX, y: lastY } = nextStep;
			const wasAlreadyVisited = coords.find(({ x, y }) => x === lastX && y === lastY);
		
			if (!wasAlreadyVisited) {
				visitedAtLeastOnce += 1;
			}

			coords.push(nextStep);
		}
	}


	return visitedAtLeastOnce;
}

// 2356 is too high
// 2202 is too low
console.log(getOnceVisitedHousesAmount(paths));
