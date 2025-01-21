import axios from 'axios';

export default async function MakeRequest(message) {
  const data = {};

  console.log(message);
  await axios.post('http://localhost:5000/', {
    messages: [
      { role: 'user', content: message},
    ],
  })
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });
};


