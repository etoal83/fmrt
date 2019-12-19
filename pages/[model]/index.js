import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const ModelPage = ({ data, status }) => {
  const router = useRouter();

  return (
    <div>
      <h2>{data.name}</h2>
      <ul>
        {data.tracks.map(t => <li key={t}>{t}</li>)}
      </ul>
    </div>
  )
}

ModelPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:8300/api/models/${query.model}?id=${query.model}`);
  const data = await res.json();
  console.log(data)

  return { data, status: res.status };
}

export default ModelPage;
