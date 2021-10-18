export function threeJsDemo(containerSelector) {
  if (typeof THREE === "undefined") return;

  // canvas <- renderer <- scene, camera, mesh
  // mesh <- geometry, material
  let mesh;
  const aspectRatio =
    document.documentElement.clientWidth /
    document.documentElement.clientHeight;
  const camera = new THREE.PerspectiveCamera(100, aspectRatio, 0.1, 10000);
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  const canvas = document.querySelector(containerSelector);

  const xSpeed = 10;
  const ySpeed = 10;

  setUpMesh();
  setUpCanvas();

  function setUpMesh() {
    const myMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color("green"),
      emissive: new THREE.Color("green"),
      specular: new THREE.Color("#636363"),
      shininess: 10,
      shading: THREE.FlatShading,
      opacity: 0.75,
    });

    mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(50, 1), myMaterial);
    mesh.rotation.z = 0.5;
    mesh.position.z = -100;
  }

  function updateMesh() {
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.03;
  }

  function setUpCanvas() {
    setUpCamera();
    setUpScene();
    setUpRenderer();
    canvas.append(renderer.domElement);
  }

  function setUpCamera() {
    camera.position.z = 200;
  }

  function setUpScene() {
    scene.add(camera);

    const light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.z = 100;
    light1.position.y = 100;
    light1.position.x = 100;
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 0.8);
    light2.position.z = 200;
    light2.position.y = 50;
    light2.position.x = -100;
    scene.add(light2);

    scene.add(mesh);
  }

  function setUpRenderer() {
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      updateMesh();
    }

    render();
  }
}
