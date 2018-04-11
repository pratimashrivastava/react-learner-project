import GLOBALS from '../components/globals';
let token = null;

export function api(type = 'GET', endpoint, body = null, customUrl) {
  let url = endpoint.indexOf('http') == -1 ? ('https://friendo-stage.herokuapp.com/api/' + endpoint) : endpoint;
  url = customUrl || url;
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  if(GLOBALS.token) {
    header['x-access-token'] = GLOBALS.token;
  }

  let req = {
    method: type,
    headers: header,
  };

  if(body) {
    req.body = JSON.stringify(body);
  }

  return new Promise((resolve, reject) => {
    fetch(url, req).then((response) => {
      if(response.status === 503) {
        return { response, json: '' }
      } else {
        return response.json()
          .then(json => ({ json, response }))
      }
    }).then(({ json, response }) => {
      if ([503].indexOf(response.status) !== -1) {
        console.log('ERROR', response, json);
      }
      return resolve({ json: json, response: response });
    }).catch((error) => console.log(error));
  });
}