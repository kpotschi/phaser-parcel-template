import Phaser from 'phaser';
import CONSTANTS from '../configs/constants.yaml';
import StartScene from '../scenes/StartScene.js';

export default {
	type: Phaser.AUTO,
	parent: 'game',
	backgroundColor: CONSTANTS.COLOR.PRIMARY,
	scale: {
		width: CONSTANTS.WIDTH,
		height: CONSTANTS.HEIGHT,
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	render: { pixelArt: true },
	fps: { target: 30, forceSetTimeOut: true },
	physics: {
		default: 'matter',
		matter: {
			gravity: { y: 0 },
			debug: true,
		},
	},
	scene: [StartScene],
};
