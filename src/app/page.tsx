"use client"
import Image from 'next/image'
import openGift from '../../public/images/closed-gift.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GiftIcon } from '@heroicons/react/24/outline'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"

const days = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: 'le petit mot',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: 'qsefq sdfqse fqsf',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: '$qsdf qsdf qse fqs 5',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: 'qsef qsdf qse fqs efqsd f',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: 'qsdfqsef qsdf qsef ',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    content: 'ma lorem ipsum ',
    color: 'Black',
  },
  // More days...
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
              value: 400,
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
              sizeRate: 10,
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

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
            {days.map((gift) => (
              <div key={gift.id} className="group relative">
                <div className="square rounded-md backdrop-blur-sm bg-white/30  group-hover:opacity-75" onClick={() => { setModalOpen(true), setCurrentGift(gift.id - 1) }}>
                  <div className="flex">
                    <h3 className="mt-2 ml-2 text-sm text-gray-700 border-2  border-red-400 px-2 rounded-xl">
                      <a href={gift.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {gift.id}
                      </a>
                    </h3>
                  </div>
                  <Image
                    src={openGift}
                    alt={gift.imageAlt}
                    width={500}
                    height={500}
                    className="motion-safe:animate-bounce px-1 pb-1"
                  />
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
                      <p className="text-sm text-gray-500">
                        {days[currentGift].content}
                      </p>
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
