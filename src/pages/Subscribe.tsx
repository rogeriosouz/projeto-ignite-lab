import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';
import imgFundo from '/src/assets/coldeMocap.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function hedleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex lg:flex-row flex-col items-center justify-between mt-20 mx-auto">
        <div className="mx-w-[640px] lg:mb-0 mb-8 px-6">
          <div className="w-full flex items-center lg:justify-start justify-center">
            <Logo />
          </div>

          <h1 className="mt-8 text-[2.5rem] leading-tight lg:text-left text-center">
            Construa uma
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed lg:text-left text-center">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="w-full p-8 bg-gray-700 lg:border lg:border-gray-500 rounded">
          <strong className="text-2sl mb-6 block">
            Inscrevase gratuitamente
          </strong>

          <form
            onSubmit={hedleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome Completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Degite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={imgFundo} className="mt-10" alt="" />
    </div>
  );
}
