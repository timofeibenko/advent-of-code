import { input } from './input.js';

const testInput = '()())'

const getFloor = (puzzle) => {
    const stepArr = puzzle.split('');
    let steps = 0;

    for (let step of stepArr) {
        step === '(' ? steps++ : steps--
    }

    console.log(steps);
}

const getBasementPosition = (puzzle) => {
    const stepArr = puzzle.split('');
    let steps = 0;

    for (let i = 0; i < stepArr.length; i++) {
        stepArr[i] === '(' ? steps++ : steps--;

        if (steps === -1) {
            console.log(i + 1);
            break;
        }
    }
};

getBasementPosition(input);