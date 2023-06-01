import Image from "next/image"
import PageWrapper from "../page-wrapper"
const features = [
  { name: 'Impulse Response', description: 'Impulse Response (IR) é uma representação do comportamento acústico de um ambiente, utilizado para recriar sonoridades realistas.' },
  { name: 'Configuração', description: 'HX Stomp oferece uma configuração compacta, versátil e poderosa, com amplo controle de efeitos e simulações de amp, permitindo uma vasta gama de timbres e flexibilidade para performances ao vivo e gravações.' },
  { name: 'Consultoria', description: 'Consultoria especializada em configurações proporciona otimização do equipamento, criação de timbres personalizados e maximização da criatividade musical.' },
  { name: 'Integrações', description: 'A integração da HX Stomp em pedalboards oferece praticidade, flexibilidade e diversidade de efeitos em um único dispositivo, economizando espaço e proporcionando uma experiência completa para explorar diversos timbres.' },
]

const products = [
  {
    id: 1,
    name: 'Impulse Responses',
    href: '#',
    price: 'R$ Consultar',
    imageSrc: '/products/kemper.png',
    imageAlt: 'HX-Stomp',
  },
  {
    id: 2,
    name: 'Patches para HX Stomp',
    href: '#',
    price: 'R$ Consultar',
    imageSrc: '/products/hx-stomp.png',
    imageAlt: 'HX Helix',
  },
  {
    id: 3,
    name: 'Kemper',
    href: '#',
    price: 'R$ Consultar',
    imageSrc: '/products/kemper.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Quad Cortex',
    href: '#',
    price: 'R$ Consultar',
    imageSrc: '/products/quad-cortex.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default function Example() {
  return (
    <PageWrapper>
      <>
        <header className="bg-black">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="text-natural-20">Voltar para home</span>
              </a>
            </div>
          </nav>
        </header>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">O melhor do seu equipamento</h2>
              <p className="mt-4 text-gray-500">
                Descubra uma nova dimensão sonora com os Patches e IR's de HX Stomp de Lucas Moser! Aperfeiçoe seu timbre com presets personalizados e impulse responses de alta qualidade. Eleve sua música a um novo patamar. Adquira agora e desbloqueie seu potencial criativo!
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <Image
                width={500}
                height={500}
                src="/products/hx-stomp.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={500}
                height={500}
                src="/products/hx-helix.png"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={500}
                height={500}
                src="/products/hx-helix.png"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={500}
                height={500}
                src="/products/hx-stomp.png"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-stretch">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group flex flex-col justify-between">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-center group-hover:opacity-75"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    </PageWrapper>
  )
}
