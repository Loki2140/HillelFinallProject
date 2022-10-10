
//MEIN FETCH
function sendRequest({ url, method = "GET", body = null }: api) {
  return fetch(url, {
    method: method,
    body: body != null ? JSON.stringify(body) : null,
    headers: { "Content-Type": "application/json" }
  });
}

// GET OBJ LIST
export function getObjList(url: string) {
  return sendRequest(url).then((res) => res.json());
}

// GET OBJ
export function getObj({ url, id }: api) {
  return sendRequest(url + id).then((res) => res.json());
}

//PUT OBJ
export function updateObj({ url, body }: api) {
  return sendRequest(url + body.id, "PUT", body).then((res) => res.json());
}

//DELETE OBJ
export function removeObj({ url, id }: api) {
  return sendRequest(url + id, "DELETE");
}
//POST OBJ
export function createObj({ url, body }: api) {
  return sendRequest(url, "POST", body).then((res) => res.json());
}
