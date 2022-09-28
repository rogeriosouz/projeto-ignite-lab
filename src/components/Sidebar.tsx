import classNames from 'classnames';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lessons } from './Lessons';

type SideBarProps = {
  isActiveMobile?: boolean;
};

export function SideBar({ isActiveMobile }: SideBarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        'w-[348px] h-[600px]  overflow-auto bg-gray-700 p-6 border-l border-gray-600',
        {
          'hidden lg:block': !isActiveMobile,
          'block fixed top-[56px] left-0 z-10 h-screen w-screen':
            isActiveMobile,
        }
      )}
    >
      <span className="lg:text-left text-center font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson: any) => (
          <Lessons
            key={lesson.id}
            availebleAt={new Date(lesson.availableAt)}
            title={lesson.title}
            type={lesson.lessonType}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  );
}
