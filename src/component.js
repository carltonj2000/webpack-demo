export default (text = "Hello world and Carlton. Count 2.") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};
