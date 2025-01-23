import axios from 'axios';

async function MakeRequest(conversation) {

  return await axios.post('http://localhost:5000/', {
    messages: conversation,
  })
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log(e.message);
  });
};

export default MakeRequest;