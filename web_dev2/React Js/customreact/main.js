function customRender(reactElement, mainContainer) {
  // const element = document.createElement(reactElement.type);
  // element.setAttribute('href',reactElement.props.href)
  // element.setAttribute('target',reactElement.props.target)
  // element.textContent = reactElement.children
  // element.innerHTML = reactElement.children
    // mainContainer.appendChild(element)
    
  const element = document.createElement(reactElement.type);
  element.textContent = reactElement.children;
  for (const key in reactElement.props) {
    if (key === "children") continue;
    element.setAttribute("href", reactElement.props.key);
  }
  mainContainer.appendChild(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "visit google ",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
