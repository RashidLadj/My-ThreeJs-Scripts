function init() {
	var scene = new THREE.Scene();
	var gui = new dat.GUI();

	/** Declare my Object **/
	var Person = function() {
		this.name = 'Rashid';
		this.pseudo = 'RashidLadj';
		this.age = 24;
		this.etudiant = true;
		this.sex = 'Homme';
		this.speed = 5;
		this.color = "#ffae23";
		/* */
		this.numTel = '0772050411';
		this.eMail = '***@gmail.com';
	};

	/** Add attributes to GUI **/
	var person = new Person();
	gui.add(person, 'name');
	gui.add(person, 'pseudo');
	gui.add(person, 'age', 20, 30);
	gui.add(person, 'etudiant');
	// Choose from accepted values
	gui.add(person, 'sex', [ 'Homme', 'Femme'] );
	// Choose from named values
	gui.add(person, 'speed', { Stopped: 0, Slow: 0.1, Fast: 5 } );
	gui.addColor(person, 'color');

	var viePersonnelle = gui.addFolder('vie Personnelle');
	viePersonnelle.add(person, 'numTel');

	var vieProfessionnelle = gui.addFolder('vie Professionnelle');
	vieProfessionnelle.add(person, 'eMail');

	
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('rgb(120, 120, 120)');
	update(renderer, scene, camera);

	document.getElementById('webgl').appendChild(renderer.domElement);
}

function update(renderer, scene, camera) {
	renderer.render(
		scene,
		camera
	);

	requestAnimationFrame(function() {
		update(renderer, scene, camera);
	})
}

init();