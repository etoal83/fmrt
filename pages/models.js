import Link from 'next/link';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const ModelListPage = ({ models }) => {
  const router = useRouter();

  return (
    <div>
      <h2>Real-time Model List</h2>
      <ul>
        {models.map(model => (
          <li key={model.id}>
            <Link href="/[model]" as={`/${model.name.toLowerCase()}`}>
              <a>{model.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

ModelListPage.getInitialProps = async () => {
  const res = await fetch('http://localhost:8300/api/models');
  const models = await res.json();

  return { models };
}

export default ModelListPage;
