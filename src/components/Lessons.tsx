import classNames from 'classnames';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

type LessonsProps = {
  title: string;
  slug?: string;
  availebleAt: Date;
  type: 'live' | 'class';
};

export function Lessons({ title, slug, availebleAt, type }: LessonsProps) {
  const { slug: slu } = useParams<{ slug: string }>();

  const isActiveLesson = slu === slug;

  const availableDateFormated = format(
    availebleAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );
  const isLLessonAvaliable = isPast(availebleAt);

  return (
    <Link to={`/event/lesson/${slug}`} className="flex flex-col group">
      <span className="text-gray-300">{availableDateFormated}</span>

      <div
        className={classNames(
          'flex flex-col rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLLessonAvaliable ? (
            <span
              className={classNames(
                'text-sm font-medium flex items-center gap-2',
                {
                  'text-blue-500': !isActiveLesson,
                  'text-white': isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded px-2 py-[0.125rem] text-white border font-bold',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              }
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
