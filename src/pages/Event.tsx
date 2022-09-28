import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 mt-[90px]">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <SideBar />
      </main>
    </div>
  );
}
