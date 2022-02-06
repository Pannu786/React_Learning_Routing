import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Pannu', text: 'This is Awesome' },
  { id: 'q2', author: 'Pannu JI', text: 'This is Awesome Braaa' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
