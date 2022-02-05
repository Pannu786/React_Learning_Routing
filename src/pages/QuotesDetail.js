
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuotesDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>Quote ID: {params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuotesDetail;
