import PageWrapper from "./page-wrapper";

export default function Home() {
  return (
    <div>
      <PageWrapper>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="video">
            <video id="background-video" autoPlay loop muted className='w-full h-screen z-10'>
              <source src='/assets/lm-home.webm' type='video/webm' />
            </video>
          </div>

          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto ">
              Guitar, blues and life
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://www.instagram.com/lucasmoseroficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meu Nome Aqui
              </a>
            </div>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority */}
            {/* /> */}
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {/* <a
              href="/about"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-neutral-700"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Sobre{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Guitarrista apaixonado pelo blues, fazendo reviews de equipamentos e consultoria especializada em pedalboards.
              </p>
            </a> */}

            <a
              href="https://www.instagram.com/lucasmoseroficial"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-neutral-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Instagram{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Vem comigo explorar novos sons, reviews de equipamentos e dicas sobre pedalboards. 🎸✨ #LucasMoser #BluesGuitar #Reviews #Pedalboards
              </p>
            </a>

            <a
              href="https://youtube.com/@LucasMoserTV"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-neutral-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                YouTube{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Descubra o mundo da guitarra comigo! Reviews de pedais, equipamentos e dicas para sua pedalboard. Inscreva-se agora!
              </p>
            </a>

            <a
              href="/lojinha"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-neutral-700"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Lojinha{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Em breve
              </p>
            </a>
          </div>
        </main>
      </PageWrapper >
    </div >
  )
}
