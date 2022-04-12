import Phaser from 'phaser';
import CONFIG from './constants.js';
import StartScene from '../scenes/StartScene.js';

export default {
	type: Phaser.AUTO,
	parent: 'game',
	backgroundColor: CONFIG.COLOR.PRIMARY,
	scale: {
		width: CONFIG.WIDTH,
		height: CONFIG.HEIGHT,
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
