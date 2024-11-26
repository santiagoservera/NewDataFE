import React from "react";

export default function Contacto() {
  return (
    <div className="w-[90%] mx-auto h-full my-16 bgContacto rounded-lg relative bg-purple-900 lg:bg-transparent">
      <div className="lg:w-1/2 mx-auto flex lg:flex-row flex-col justify-between items-center h-full  p-10 ">
        <div className="w-full flex flex-col gap-5 p-5 justify-center h-full lg:mt-[-70px] rounded-lg relative z-1 ">
          <div className="flex justify-center w-full text-center  ">
            <p className="text-4xl font-bold text-gradiente-2 text-purple-900  text-center font-tiny5 uppercase  relative z-1 ">
              Ponte en contacto con nosotros
            </p>
          </div>
          <a
            href="https://wa.me/2645762629"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center w-[80%] mx-auto ">
              <div className="flex gap-2 items-center flex-col-reverse lg:flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  className="rotate-90 lg:rotate-0"
                >
                  <path
                    fill="#000000"
                    d="M21 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4.47l-.13 1.21l-2.2 4.94c-.2.5-.73.85-1.34.85H8.5c-.8 0-1.5-.73-1.5-1.5V10c0-.39.16-.74.43-1l4.2-4.9l.77.74c.2.19.32.45.32.74l-.03.22L11 9zM2 18v-8h3v8z"
                  />
                </svg>
                <p className="font-bold font-tiny5 ">CLICK HERE</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25.1953125"
                viewBox="0 0 256 258"
                className="lg:hidden"
              >
                <defs>
                  <linearGradient
                    id="IconifyId1932b50f248bc4d652"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#1FAF38" />
                    <stop offset="100%" stop-color="#60D669" />
                  </linearGradient>
                  <linearGradient
                    id="IconifyId1932b50f248bc4d653"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#F9F9F9" />
                    <stop offset="100%" stop-color="#FFF" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#IconifyId1932b50f248bc4d652)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                />
                <path
                  fill="url(#IconifyId1932b50f248bc4d653)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                />
                <path
                  fill="#FFF"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                />
              </svg>
              <p className="font-tiny5 text-2xl font-bold relative z-50 text-center">
                NUESTRO WHATSAPP
              </p>
              <div className="lg:flex flex-row-reverse gap-2 items-center hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M3 9h10l-1.69-3.2l-.03-.22c0-.29.12-.55.32-.74l.77-.74l4.2 4.9c.27.26.43.61.43 1v6.5c0 .77-.7 1.5-1.5 1.5h-4.36c-.61 0-1.14-.35-1.34-.85l-2.2-4.94L7.47 11H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m16 9v-8h3v8z"
                  />
                </svg>
                <p className="font-bold font-tiny5">CLICK HERE</p>
              </div>
            </div>
          </a>

          <div className="flex justify-center lg:flex-row flex-col items-center w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
              />
            </svg>
            <p className="font-tiny5 lg:text-2xl font-bold ">
              SANTIAGOSERVERA21@GMAIL.COM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
