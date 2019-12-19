import { useRouter } from 'next/router';

const FmHistoryPage = () => {
  const router = useRouter();
  const { model, fm } = router.query;

  return (
    <h1>{fm}</h1>
    <div>
      <p>Model: {model}</p>
    </div>
  );
}

export default FmHistoryPage;
