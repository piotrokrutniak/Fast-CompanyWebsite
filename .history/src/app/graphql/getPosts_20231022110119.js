// https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claolx21s4ovr01tadfoba54u/master
import { gql, useQuery } from '@apollo/client';

const query = gql`
    query Posty {
        posts(skip: 0) {
        id
        title
        location
        description
        photos {
            id
            url
        }
        documentInStages
        }
        post(where: {})
    }
  
`;

function PostPage({ skip }) {
  const { loading, error, data } = useQuery(query, {
    variables: { slug: 'hygraph-is-awesome' },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}