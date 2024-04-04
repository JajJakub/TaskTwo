import { useParams } from "react-router-dom";

function NewsDetail() {
  const params = useParams<{ newsId: string }>();

  return (
    <div>
      <main>
        <p>{params.newsId}</p>
      </main>
    </div>
  );
}

export default NewsDetail;
