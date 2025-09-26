exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = JSON.parse(event.body);
  const response = body.response;

  // Here you can add logic to save response to a DB or send email
  console.log('Received response:', response);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Response received successfully' })
  };
};
