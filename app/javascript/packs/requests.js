const BASE_URL = `http://localhost:3000/api/v1`;

export const Exercise = {
  one(id) {
    return fetch(`${BASE_URL}/exercises/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(res => res.json());
  }
};

