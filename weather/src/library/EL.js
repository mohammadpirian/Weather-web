const El = ({ element, child, restAttrs = {}, ...rest }) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }

  for (const key in restAttrs) {
    el.setAttribute(key, restAttrs[key]);
  }

  if (child) Array.isArray(child) ? el.append(...child) : el.append(child);
  return el;
};

export default El;
