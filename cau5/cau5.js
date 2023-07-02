let nodes = [];

// Lấy các phần tử HTML
const idInput = document.getElementById('id-input');
const parentInput = document.getElementById('parent-input');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const resultElement = document.getElementById('result');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');

// Xử lý sự kiện khi nút "Submit" được nhấn
submitButton.addEventListener('click', () => {
  const id = idInput.value.trim();
  const parent = parentInput.value.trim();

  if (id !== '') {
    nodes.push({ id, parent });
    idInput.value = '';
    parentInput.value = '';
  } if (id == '' && parent == '') {
    label1.innerHTML = "Vui Lòng nhập id";
    label2.innerHTML = "Vui Lòng nhập parent";
  } else {
    resultElement.textContent = '';
  }
  renderTree();
});

// Xử lý sự kiện khi nút "Restart" được nhấn
restartButton.addEventListener('click', () => {
  nodes = [];
  resultElement.textContent = '';
  label1.innerHTML = "";
  label2.innerHTML = "";
});

// Hàm xây dựng cây
function buildTree(input) {
  const nodeMap = {};
  const rootNodes = [];

  input.forEach(node => {
    const { id, parent } = node;
    const newNode = { id, children: null };
    nodeMap[id] = newNode;

    if (parent === '0') {
      rootNodes.push(newNode);
    } else {
      const parentNode = nodeMap[parent];
      if (parentNode) {
        parentNode.children = parentNode.children || [];
        parentNode.children.push(newNode);
      }
    }
  });

  return rootNodes;
}

// Hàm hiển thị cây
function renderTree() {
  const tree = buildTree(nodes);
  resultElement.textContent = JSON.stringify(tree, null, 2);
}