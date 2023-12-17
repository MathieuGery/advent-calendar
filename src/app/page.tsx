"use client"
import Image from 'next/image'
import openGift from '../../public/images/open-gift.png'
import closedGift from '../../public/images/closed-gift.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GiftIcon } from '@heroicons/react/24/outline'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"

const days = [
  {
    id: 1,
    imageAlt: "gift image",
    content: 'Finalement je te fais un calendrier moi aussi !',
    date: '2023-12-01'
  },
  {
    id: 2,
    imageAlt: "gift image",
    content: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Plain-M%26Ms-Pile.jpg',
    date: '2023-12-02'
  },
  {
    id: 3,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/VtHxp3Dv',
    date: '2023-12-03'
  },
  {
    id: 4,
    imageAlt: "gift image",
    content: 'https://www.tentazioni-uk.com/image/cache/catalog/Products/biscuit/baciocchi_mulino_bianco_tentazioni-1000x1000.jpg',
    date: '2023-12-04'
  },
  {
    id: 5,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/wVG0NHMU',
    date: '2023-12-05'
  },
  {
    id: 6,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/k2py21Sc',
    date: '2023-12-06'
  },
  {
    id: 7,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/06VKbfjc',
    date: '2023-12-07'
  },
  {
    id: 8,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/M57c1Jn2',
    date: '2023-12-08'
  },
  {
    id: 9,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/fc8Ha8y1',
    date: '2023-12-09'
  },
  {
    id: 10,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/DW0SUNON',
    date: '2023-12-10'
  },
  {
    id: 11,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/JtPY64yI',
    date: '2023-12-11'
  },
  {
    id: 12,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/5kGb8JNM',
    date: '2023-12-12'
  },
  {
    id: 13,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/4eaGkck6',
    date: '2023-12-13'
  },
  {
    id: 14,
    imageAlt: "gift image",
    content: 'Comptoir volant pour quand je reviens ? 🍔🙈',
    date: '2023-12-14'
  },
  {
    id: 15,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/o08rs-8h',
    date: '2023-12-15'
  },
  {
    id: 16,
    imageAlt: "gift image",
    content: 'https://www.youtube.com/watch?v=12GYvfYjyV0&ab_channel=RedHotChiliPeppers',
    date: '2023-12-16'
  },
  {
    id: 17,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/xoeMaXYz',
    date: '2023-12-17'
  },
  {
    id: 18,
    imageAlt: "gift image",
    content: 'Kinder',
    date: '2023-12-18'
  },
  {
    id: 19,
    imageAlt: "gift image",
    content: 'https://www.lotusbakeries.be/sites/default/files/styles/image_style_scale_width_xs/public/2017-03/1400%20Orig%20Chocolade.png?itok=Q8EbHvtv',
    date: '2023-12-19'
  },
  {
    id: 20,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/qRl8Fb9B',
    date: '2023-12-20'
  },
  {
    id: 21,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/LiC_nVVh',
    date: '2023-12-21'
  },
  {
    id: 22,
    imageAlt: "gift image",
    content: 'https://index.gideon.ovh/share/ubOCWiX3',
    date: '2023-12-22'
  },
  {
    id: 23,
    imageAlt: "gift image",
    content: 'On ferait pas du Mario wonders ? 🍄',
    date: '2023-12-23'
  },
  {
    id: 24,
    imageAlt: "gift image",
    content: '🎁 Joyeux Noël ! 🎄',
    date: '2023-12-24'
  }
]


export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [currentGift, setCurrentGift] = useState<number>(0)

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  const checkDate = useCallback(async (date:string) => {
    const giftDate = new Date(date)
    if (giftDate.getTime() <= Date.now()) setModalOpen(true)
  }, [])

  const checkGiftDate =(date:string) => {
    const giftDate = new Date(date)
    if (giftDate.getTime() <= Date.now()) return false
    return true
  }

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          name: "Snow",
          particles: {
            number: {
              value: 600,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 10,
            },
            move: {
              enable: true,
              speed: 40,
              direction: "bottom",
              straight: true,
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10,
            },
            zIndex: {
              value: {
                min: 0,
                max: 100,
              },
              opacityRate: 10,
              sizeRate: 20,
              velocityRate: 10,
            },
          },
          background: {
            color: "#33333",
          },
        }}
      />
      <div className="bg-gradient-to-bl from-stone-200 via-teal-500 to-green-300 h-screen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">🎁 Ton petit calendrier de l'avent 🎁</h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
            {days.map((gift) => (
              <div key={gift.id} className="group relative">
                <div className="square rounded-md backdrop-blur-sm bg-white/30  group-hover:opacity-75" onClick={() => { checkDate(gift.date), setCurrentGift(gift.id - 1) }}>
                  <div className="flex">
                    <h3 className="mt-2 ml-2 text-sm text-gray-700 border-2  border-red-400 px-2 rounded-xl">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {gift.id}
                      </a>
                    </h3>
                  </div>
                  {checkGiftDate(gift.date) ? ( <Image
                    src={closedGift}
                    alt={gift.imageAlt}
                    width={500}
                    height={500}
                    className="motion-safe:animate-bounce px-1 pb-1"
                  />): ( <Image
                    src={openGift}
                    alt={gift.imageAlt}
                    width={500}
                    height={500}
                    className="px-1 pb-1"
                  />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>

          {/* 2. The backdrop layer */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          {/* 3. The modal video */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="max-w-5xl mx-auto h-full flex items-center">
              <Dialog.Panel className="p-4 w-full max-h-full rounded-3xl shadow-2xl bg-white overflow-hidden">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <GiftIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      La surprise du jour 🙈
                    </Dialog.Title>
                    <div className="mt-2">
                      <a href={days[currentGift].content} className="text-sm text-gray-500">
                        {days[currentGift].content}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setModalOpen(false)}
                  >
                    Retour 😘
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}
