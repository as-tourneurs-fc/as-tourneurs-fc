import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/avatar.jpg";

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block ml-4">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2">

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-neutral-800">

            <p className="text-2xl leading-normal ">Association Tourneurs de Franche-Comté <br />16, route de Grandfontaine <br />25320 <br />TORPES <br /><a href="mailto:r.haas@wanadoo.fr"></a></p>

            <Avatar
              image={userOneImg}
              name="M. Roland Haas"
              title="Tél. 06 88 38 06 22"
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-neutral-800">
            <div className="">

              <p className="text-2xl leading-normal ">FORUM    <br /><Mark><a href="https://as-tourneurs-fc.niceboard.com" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">as-tourneurs-fc.niceboard.com</a></Mark></p>

              <br />

              <p className="text-2xl leading-normal">Retrouvez-nous sur notre

              <span className="flex mt-5 space-x-5">
                {/* <a
                  href="https://twitter.com/web3templates"
                  target="_blank"
                  rel="noopener">
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a> */}
                <Mark><a
                  href="https://www.facebook.com/groups/tourneursdefranchecomte"
                  target="_blank"
                  rel="noopener" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                  <span >groupe Facebook</span>
                  <span className=""><Facebook /></span>
                </a></Mark>
                {/* <a
                  href="https://instagram.com/web3templates"
                  target="_blank"
                  rel="noopener">
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener">
                  <span className="sr-only">Linkedin</span>
                  <Linkedin />
                </a> */}
              </span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt=""
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
