
export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method, credentials: 'include' };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(payload)
  }

  const res = await fetch(url, options)

    if (res.ok) {
    return res.status === 204 ? null : res.json();
  }
  
  const err = new Error('Request failed');
  err.status = res.status;
  throw err;
}