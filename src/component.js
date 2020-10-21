export default (text = "Hello world and Carlton. Count 1.") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};
