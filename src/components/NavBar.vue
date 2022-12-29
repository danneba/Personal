<script setup>
import { ref } from "vue";
import { AcademicCapIcon } from "@heroicons/vue/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";

import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const slides = [
  {
    id: "1",
    url: "src/assets/emily.jpeg",
    title: "Emily Hylton",
    content:
      "Peter is a skilled technical communicator who truly knows his technical audience. As a software developer himself, he understands the key elements of programming documentation and as a writer, he gets the message right",
  },
  {
    id: "2",
    url: "src/assets/lucas.jpeg",
    title: "Lucas Parker",
    content:
      "I worked with Peter as a build engineer on an SDK project at Microsoft. Working with him went very smoothly as he was quick to pick up on and give feedback about the technical details of our build and compliance processes. He remained very flexible throughout the process, enabling that side of the operation to remain virtually transparent to me",
  },
  {
    id: "3",
    url: "src/assets/Jeff.jpeg",
    title: "Jeff Rubingh",
    content:
      "Peter has that rare combination of skills that uniquely fits him to the task of explaining technology; that is to say, he is not only a skilled software engineer, both meticulous and innovative, but has an exceptional ability to communicate complex topics to a variety of audiences in such a way that they “get it.”",
  },
  {
    id: "4",
    url: "src/assets/Eliot.jpeg",
    title: "Eliot Graff",
    content:
      "I have had the good fortune to work with Peter off and on over the past four years. Peter is, hands down, the best programmer writer I have hired in the seven years I have been at this company. He can tackle code issues in C++, C#, Visual Basic, and PERL, and excels at creating coherent, intelligent documentation to accompany his sample work. Peter is pragmatic, smart, and, most of all, understands the audience members for whom he writes. He can scope assignments large and small, and sticks to promised deliverables. Peter is a find, and an extremely personable one, to boot.",
  },
  {
    id: "5",
    url: "src/assets/david.jpeg",
    title: "David Hale",
    content:
      "I managed Peter for almost two years both as a contract Programming Writer and as a vendor for the Tablet PC SDK team at Microsoft. He has deep programming skills in C++ and in C#. He is an excellent writer who picks up complex technical topics quickly and explains them well. Peter has a personable work style and tenacity that makes it possible for him to get the information he needs from the product team. He is very organized and self-driven to stay on schedule.",
  },
];
const breakpoint = {
  // 700px and up
  300: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: "center",
  },
};
</script>
<template class="w-full h-screen">
  <div class="flex w-full min-h-screen items-center justify-center">
    <div class="flex flex-col w-[80%] shadow-md justify-center">
      <div class="w-full h-[776px] flex flex-col relative bg-main" id="home">
        <nav class="flex w-full fixed py-1 justify-between px-8 pr-72">
          <div class="flex flex-row">
            <p class="text-2xl ml-24">
              Peter.<span class="text-xl text-circle">com</span>
            </p>
          </div>
          <div class="flex items-center text-lg gap-12 px-44">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#test">Testimonial</a>
            <a href="#contact">Contact Me</a>
          </div>
        </nav>
        <div class="flex items-center">
          <p class="text-2xl font-semibold justify-start mt-16 ml-32">
            __Hello, I'm Peter
          </p>
        </div>
        <div class="flex items-center justify-between ml-32">
          <div class="w-8">
            <p class="text-6xl font-semibold">
              Peter, Who loves Software Engineering
            </p>
          </div>
          <div
            class="flex relative mx-96 rounded-full w-[382px] h-[371px] -mt-8 bg-photo"
          >
            <div class="absolute -bottom-1 right-32 h-[361px] w-[365px]">
              <img
                src="src/assets/peter.png"
                alt=""
                class="w-full h-full rounded-[50px]"
              />
            </div>
          </div>
        </div>

        <div
          class="flex flex-col absolute right-1/3 -bottom-14 rounded-full bg-circle mx-auto justify-center items-center w-[300px] h-[300px]"
        >
          <div class="flex justify-start">
            <p class="text-white text-xl">Contact Me</p>
          </div>
          <div
            class="relative rounded-full flex items-center justify-center bg-contact w-[82px] h-[82px]"
          >
            <unicon
              name="envelope"
              fill="white"
              class=""
              width="32"
              height="32"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-y-12" id="about">
        <div class="flex mt-12 justify-center items-center">
          <p class="text-7xl text-photo font-bold">About Me</p>
        </div>
        <div class="flex space-y-12 justify-between">
          <div class="flex px-36">
            <p class="flex text-2xl font-semibold">Peter Gruenbaum, PhD</p>
          </div>
          <div class="flex w-[736px] px-12">
            <p>
              Software engineer, physicist, writer – I bring my broad experience
              to solve technical problems and communicate complex information. I
              am focused on the energy industry and the power of software to
              increase efficiency and improve the grid. I've worked on
              microservices, machine learning, solar energy, mobile apps, data
              visualization, augmented reality, and many other technologies.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full space-y-16">
          <div class="flex justify-center items-center">
            <p class="text-4xl text-photo font-medium">Education</p>
          </div>
          <div class="flex justify-between">
            <div class="flex px-36 gap-12 items-center justify-center">
              <AcademicCapIcon class="w-12 text-photo" />
              <div
                class="flex flex-col font-semibold justify-center items-center"
              >
                <p class="text-2xl">University of Chicago</p>
                <p class="text-lg">B.A,Physics</p>
                <p class="text-lg">1980-1984</p>
              </div>
            </div>
            <div class="flex px-36 gap-12 items-center justify-center">
              <AcademicCapIcon class="w-12 text-photo" />
              <div
                class="flex flex-col font-semibold justify-center items-center"
              >
                <p class="text-2xl">Stanford University</p>
                <p class="text-lg">PhD, Applied Physics</p>
                <p class="text-lg">1984-1990</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <p class="text-4xl text-photo font-medium">Achievements</p>
          </div>
          <div class="flex flex-row w-full items-center justify-center gap-40">
            <div
              class="flex flex-col px-3 space-y-4 bg-min w-[152px] h-[152px] rounded-full items-center justify-center"
            >
              <p class="flex text-4xl text-circle font-extrabold">14 +</p>
              <p class="flex text-xs">Years and Counting on SDK bridge</p>
            </div>
            <div
              class="flex flex-col px-3 space-y-4 bg-min w-[152px] h-[152px] rounded-full items-center justify-center"
            >
              <p class="flex text-4xl text-circle font-extrabold">25 +</p>
              <p class="flex text-xs">Skills</p>
            </div>
            <div
              class="flex flex-col px-3 space-y-4 bg-min w-[152px] h-[152px] rounded-full items-center justify-center"
            >
              <p class="flex text-4xl text-circle font-extrabold">5 +</p>
              <p class="flex text-xs">Recommendations</p>
            </div>

            <div
              class="flex flex-col px-3 space-y-4 bg-min w-[152px] h-[152px] rounded-full items-center justify-center"
            >
              <p class="flex text-4xl text-circle font-extrabold">2 +</p>
              <p class="flex text-xs">Patents</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full mt-12 bg-photo justify-center items-center"
        id="test"
      >
        <div
          class="flex flex-col mt-12 space-y-7 text-white justify-center items-center"
        >
          <p class="text-6xl font-bold font-Inter">Testimonial</p>
          <p class="text-2xl">What Previous Colleagues says about me</p>
        </div>
        <div
          class="flex flex-row mt-8 mb-16 gap-40 justify-center items-center"
        >
          <Carousel
            :wrap-around="true"
            :breakpoints="breakpoint"
            class="w-[750px]"
          >
            <Slide v-for="slide in slides" :key="slide.id">
              <div
                class="flex flex-col justify-center items-center gap-y-2 w-full align-middle carousel_item"
              >
                <img
                  :src="slide.url"
                  alt=" image"
                  class="rounded-full w-[100px] h-[100px]"
                />
                <p class="text-white text-2xl font-medium font-Imbue">
                  {{ slide.title }}
                </p>

                <p class="text-white">{{ slide.content }}</p>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
      <div class="flex flex-col mt-8 bg-white h-[500px] w-full" id="contact">
        <div class="flex flex-col justify-center items-center">
          <p class="text-6xl font-bold text-photo">Contact Me</p>
        </div>
        <div class="flex flex-row w-full">
          <div class="flex flex-col mx-64 my-12">
            <p class="py-2">Type Name:</p>
            <input
              type="text"
              class="w-[325px] h-[40px] bg-input rounded-lg p-4 border outline-none focus:border-photo"
            />
            <p class="py-2">Your Email:</p>
            <input
              type="text"
              class="w-[325px] h-[40px] bg-input rounded-lg p-4 border outline-none focus:border-photo"
            />
            <p class="py-2">Subject:</p>
            <input
              type="text"
              class="w-[325px] h-[40px] bg-input rounded-lg p-4 border outline-none focus:border-photo"
            />
          </div>
          <div class="flex flex-col mr-72 my-12">
            <div class="flex flex-col">
              <p class="py-2">Your Message:</p>
              <textarea
                class="bg-input rounded-lg h-[204px] w-[425px] p-4 border outline-none focus:border-photo"
              />
              <button
                type="reset"
                class="text-white rounded-2xl bg-photo w-[82px] h-[37px] my-6 self-end"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-6 w-full bg-main h-[76px]">
        <div
          class="rounded-full w-[63px] flex pt-4 h-[63px] mx-24 justify-center items-center"
        >
          <img
            src="src/assets/peter.jpg"
            alt=" Emily's Photo"
            class="rounded-full"
          />
        </div>
        <div class="flex items-center justify-center gap-16 ml-96">
          <img src="src/assets/linkedin.png" class="h-12" alt="linkedin" />
          <img src="src/assets/facebook.png" class="h-12" alt="facebook" />
          <img src="src/assets/whatsapp.png" class="h-12" alt="whatsapp" />
          <img src="src/assets/gmail.png" class="h-12" alt="gmail" />
        </div>
        <div class="flex ml-24 justify-center items-center">
          <p><span>© 2023</span>.All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
