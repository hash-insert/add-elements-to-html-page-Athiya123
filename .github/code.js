
// const list = document.createElement("li");
// const node = document.createTextNode("Hi");
// list.appendChild(node);
// const element = document.getElementById("container");
// element.appendChild(list);


const addElement =(root,element,label) => {
    let codeDiv = document.getElementById(root);
    let elem = document.createElement(element);
    let node = document.createTextNode(label);
    elem.appendChild(node);
    codeDiv.appendChild(elem);
}
addElement("submit_container","div","list");
addElement("submit_container","li","first");
addElement("submit_container","li","Hi");
addElement("submit_container","li","hello");
addElement("submit_container","button","submit");
