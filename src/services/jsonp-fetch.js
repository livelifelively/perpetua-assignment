export default function jsonpFetch(url, cb, adapter) {
  const newUrl = `${url}&callback=jsonpCallback`;
  const scriptElement = document.createElement('script');
  scriptElement.src = newUrl;

  window.jsonpCallback = (data) => {
    const newData = adapter ? adapter(data) : data;
    cb(newData);
  };
  document.body.appendChild(scriptElement);
}
