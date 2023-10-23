const HYGRAPH_URL = "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/claolx21s4ovr01tadfoba54u/master"

export async function GetPosts(skip = 0){
  try {
    const headers = {
      'content-type': 'application/json'
    }
    const requestBody = {
      query: `query Posty {
                posts(skip: ${skip}, first: 5, stage: PUBLISHED) {
                  id
                  title
                  location
                  description
                  photos {
                    id
                    url
                  }
                }
                postsConnection{
                  aggregate{
                    count
                  }
                }
              }
              `,
      variables: { }
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    };
    const response = await (await fetch(HYGRAPH_URL, options)).json();
    //console.log('RESPONSE FROM FETCH REQUEST', response?.data);
    return response?.data
  }
  catch (err) {
    console.log('ERROR DURING FETCH REQUEST', err);
  }
}