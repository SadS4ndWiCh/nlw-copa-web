import { GetServerSideProps } from "next"
import Image from "next/image";

import appMockupPreviewImage from '../assets/mobile-mockup-preview.png';
import logoSvg from '../assets/logo.svg';
import usersAvatarsImage from '../assets/users-avatars.png';
import iconCheckSvg from '../assets/icon-check.svg';

type Props = {
  count: number;
};

export default function Home({ count }: Props) {
  return (
    <div className="bg-app bg-no-repeat bg-cover">
      <div className="grid grid-cols-2 gap-28 place-content-center max-w-[1124px] min-h-screen mx-auto py-14">
        <main>
          <Image src={logoSvg} alt="NLW Copa" />

          <h1 className="mt-14 mb-10 font-bold text-5xl text-white">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>

          <div className="flex items-center gap-2">
            <Image src={usersAvatarsImage} alt="" />
            <strong className="text-xl text-gray-200">
              <span className="text-green-500">+12.592</span> pessoas já estão usando
            </strong>
          </div>

          <div className="my-10">
            <form className="flex gap-2">
              <input
                className="flex-1 px-6 py-4 bg-gray-700 rounded border border-gray-600 text-gray-200 outline-none focus:ring-yellow-500 focus:ring-2 placeholder:text-gray-300"
                type="text"
                placeholder="Qual nome do seu bolão?"
                required
              />
              <button
                className="px-6 py-4 rounded bg-yellow-500 font-bold text-gray-900 uppercase transition-colors hover:bg-yellow-600"
                type="submit"
              >
                Criar meu bolão
              </button>
            </form>

            <p
              className="mt-4 text-gray-300"
            >
              Após criar seu bolão, você receberá um código único que poderá usar 
              para convidar outras pessoas 🚀
            </p>
          </div>

          <div className="flex justify-between mt-10 pt-10 border-t border-gray-600">
            <div className="flex items-center gap-6">
              <Image src={iconCheckSvg} alt="" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">+2000</span>
                <span className="text-gray-200">Bolões criados</span>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-600" />

            <div className="flex items-center gap-6">
              <Image src={iconCheckSvg} alt="" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">+20000</span>
                <span className="text-gray-200">Palpites enviados</span>
              </div>
            </div>
          </div>
        </main>

        <Image
          src={appMockupPreviewImage}
          alt="Dois celulares exibindo uma prévia da aplicação móvel NLW Copa"
          quality={100}
        />
      </div>
    </div>
  )
}

/* export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();

  return {
    props: {
      count: data.count,
    }
  }
} */