import CONSTANTS from '../configs/constants.js';

export default class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' });
	}

	init() {}

	preload() {
		this.load.image('testImage', 'assets/images/jpg.png');
	}

	create() {
		this.createStartButton();
	}

	createStartButton() {
		this.testimage = this.add.image(20, 20, 'testImage');
		this.button = this.add
			.text(CONSTANTS.WIDTH / 2, CONSTANTS.HEIGHT / 2, 'HELLO PHASER', {
				fontSize: 64,
				align: 'center',
			})
			.setOrigin(0.5, 0.5)
			.setTint(0x333333)
			.setInteractive({ useHandCursor: true });
	}
}
