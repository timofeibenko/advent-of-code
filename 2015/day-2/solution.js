import { input } from './input.js';

const testInput = 
`2x2x2
10x20x3
1x1x10`

const getGiftWrapAmount = (l, w, h) => {
  const surface = 2*l*w + 2*w*h + 2*h*l;
  const slack = Math.min(l*w, w*h, h*l);

  return surface + slack;
};

const getRibbonLength = (values) => {
	// this piece of shit sorts it as strings 20 comes after 10
  const [first, scnd, third] = values.sort((a, b) => a - b);
  const ribbonWrap = first + first + scnd + scnd;
  const bow = first * scnd * third;

  return ribbonWrap + bow;
}

const getTotalWrapAmount = (input) => {
  const giftDimensions = input.split('\n');
  let totalWrap = 0;
  let totalRibbon = 0;


  for (let gift of giftDimensions) {
	let values = gift.split('x').map(val => +val);

	totalWrap += getGiftWrapAmount(...values);
	totalRibbon += getRibbonLength(values);
  }

  return { wrap: totalWrap, ribbon: totalRibbon}
}

getTotalWrapAmount(input);
//3812909