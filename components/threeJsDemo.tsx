export function threeJsDemo(containerSelector) {
  if (!("THREE" in window)) return;

  // canvas <- renderer <- scene, camera, mesh
  // mesh <- geometry, material
  let mesh;
  const aspectRatio =
    document.documentElement.clientWidth /
    document.documentElement.clientHeight;
  const camera = new window.THREE.PerspectiveCamera(
    100,
    aspectRatio,
    0.1,
    10000
  );
  const scene = new window.THREE.Scene();
  const renderer = new window.THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  const canvas = document.querySelector(containerSelector);

  const xSpeed = 10;
  const ySpeed = 10;

  setUpMesh();
  setUpCanvas();

  function setUpMesh() {
    const myMaterial = new window.THREE.MeshPhongMaterial({
      color: new window.THREE.Color("green"),
      emissive: new window.THREE.Color("green"),
      specular: new window.THREE.Color("#636363"),
      shininess: 10,
      shading: window.THREE.FlatShading,
      opacity: 0.75,
    });

    mesh = new window.THREE.Mesh(
      new window.THREE.IcosahedronGeometry(50, 1),
      myMaterial
    );
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

    const light1 = new window.THREE.PointLight(0xffffff, 1);
    light1.position.z = 100;
    light1.position.y = 100;
    light1.position.x = 100;
    scene.add(light1);

    const light2 = new window.THREE.PointLight(0xffffff, 0.8);
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
