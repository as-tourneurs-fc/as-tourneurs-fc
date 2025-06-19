import Image from "next/image";
import React from "react";
import Container from "./container";
import Link from 'next/link'


export default function News(props) {

  const { data } = props

  return (
    <>
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap justify-center">

        {data.image &&
          <div
            className={`flex items-center justify-center w-full lg:w-1/2 xl:w-1/3 ${
              props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
            <div>
              <Image
                src={data.image}
                width="521"
                height="482"
                alt=""
                placeholder="blur"
              />
            </div>
          </div>
        }

        <div
          className={`flex flex-wrap items-center w-full ${ data.image ? "w-auto lg:w-1/2 xl:w-1/3" : "lg:w-2/3 xl:w-3/5" } ${ props.imgPos === "right" ? "lg:justify-end" : "" }`}>
          <>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full my-5" dangerouslySetInnerHTML={{__html: data.excerpt}} />

            {data.detail_link &&
              <div className="w-full pt-5">
                <p className="mb-5"><Link href={data.detail_link} className="py-2 px-4 text-2xl leading-normal text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 hover:text-indigo-800 transition-all duration-300">En savoir plus</Link></p>
              </div>
            }

          </>
        </div>

      </Container>
    </>
  );
}
