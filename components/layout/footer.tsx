import { FC } from "react";
import ShareButton from "./sharebutton";
import 'animate.css';

export const Footer: FC = () => {
  return (
    <div className="animate__animated animate__fadeInLeft animate__delay-1s pb-6 gap-10 bg-color-white dark:bg-color-hitam shadow-lg shadow-color-hitam dark:shadow-color-dark pt-8">

      <div className="flex flex-wrap mt-4 pb-6">
        <div className="mx-6 lg:flex flex-rows-4">

          <div className="w-full px-4 mb-2">
            <h2 className="font-bold text-3xl text-color-accent mb-5 mt-2"
              style={{
                fontStyle: "bold"
              }}
            >ZNUANIME</h2>
            <p className="text-xs text-color-hitam dark:text-color-primary grid mb-16 md:w-1/4 lg:w-1/2">

              ZNUAVIN, menjadi destinasi utama bagi penggemar anime di Indonesia. Menyajikan list anime, ZNUAVIN berkomitmen memberikan akses tanpa batas kepada para pecinta anime.  ZNUAVIN hadir untuk memenuhi kebutuhan hiburan anime tanpa biaya berlangganan, seperti Netflix, Disney+, HBO, Apple TV+, dan Amazon Prime Video.

              Kami berupaya memberikan pengalaman untuk melihat anime populer yang memuaskan untuk para penikmat anime di Indonesia. Penting untuk dicatat bahwa ZNUAVIN khusus fokus pada anime dan tidak menyediakan konten film atau serial TV dari Indonesia.

              Tetap pantau perkembangan website ini, karena kami terus berupaya mengembangkan layanan demi memenuhi kebutuhan penggemar anime di seluruh Indonesia.

              <span className="font-bold">(Website ini masih berada pada tahap pengembangan).</span></p>
          </div>


          <div className="w-full gap-1 px-4 mb-12 md:w-1/5 lg:mr-20">
            <h3 className="font-bold text-color-hitam dark:text-color-primary text-xl mb-5 pt-4">Hubungi Saya</h3>
            <p className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all"><a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=zanualvin06@gmail.com">zanualvin06@gmail.com</a></p>
            <p className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all"><a href="https://www.google.com/maps/place/JinuL+garage+spesialis+motor+INJEKSI+sport%26metic/@-7.672191,112.2544065,17z/data=!3m1!4b1!4m6!3m5!1s0x2e786927ab6458cb:0xd1d4dd5964b6f4b4!8m2!3d-7.6721963!4d112.2569814!16s%2Fg%2F11ghfqrpg3?entry=ttu"> Jl. Wedani Kecamatan Ngoro Kabupaten Jombang</a></p>
            <p className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all"><a href="https://www.google.com/maps/place/Jawa+Timur/@-6.9019615,110.9404378,7z/data=!3m1!4b1!4m6!3m5!1s0x2da393f79feeb5c5:0x1030bfbca7cb850!8m2!3d-7.5360639!4d112.2384017!16zL20vMDF2Zndk?entry=ttu">Jawa Timur</a></p>
            <p className="text-[13px] pb-8 text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all lg:text-[14px]"><a href="https://wa.me/6281217835337">6281217835337</a></p>

          </div>


          <div className="w-full px-4 mb-12 pb-8 md:w-1/2 pt-4">
            <h3 className="font-semibold text-xl text-color-hitam dark:text-color-primary mb-5 lg:mr-20">Film Original</h3>
            <ul className="text-color-accent grid grid-cols-1">
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Apple TV+</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Amazon</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Disney+</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">HBO</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Netflix</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">The CW</li>
            </ul>
          </div>

          <div className="w-full px-4 pb-7 lg:w-1/3 md:w-1/3 pt-4">
            <h3 className="font-semibold text-xl text-color-hitam dark:text-color-primary mb-5">Kategori</h3>
            <ul className="text-color-accent grid grid-cols-1">
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Action</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Aventure</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Garde</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Mystery</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Suspense</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Coming Soon</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Movie</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Romance</li>
              <li className="text-sm inline-block text-color-accent hover:text-color-hitam dark:hover:text-color-white hover:underline duration-500 transition-all">Slice of Life</li>
            </ul>
          </div>

        </div>


      </div>

      <div className="lg:w-full lg:flex flex-cols-1">
        <div className="justify-items-start mt-1 lg:w-full lg:flex lg:mt-10 lg:justify-between">
          <h1 className="italic mx-10 mt-2  text-color-hitam dark:text-color-primary text-sm pb-3 border-t-color-accent">
            Copyright © 2024 by <a href="/"><span className=" text-color-hitam dark:text-color-accent hover:text-color-primary">ZNUANIME</span></a>. All Rights Reserved.
          </h1>
          <div className="ml-10 lg:flex items-end gap-2 flex flex-cols-5 pb-2">
            <a href="https://www.linkedin.com/in/alvin-zanua-putra-34a758288"
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-color-white hover:fill-color-accent duration-500 transition-all" width="24" height="24" fill="#000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
            </a>

            <a href="https://www.instagram.com/znualvin_"
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000" className="dark:fill-color-white hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100070957315001"
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000" className="dark:fill-color-white hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
            </a>
            <a href="https://t.me/zanuavin"
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="dark:fill-color-white hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path></svg>
            </a>

            <section>
              <ShareButton />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
