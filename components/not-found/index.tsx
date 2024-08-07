import { IoWarning } from "react-icons/io5";
import { ButtonBack } from "./button-back";

export const NotFoundSection = () => {
  return (
    <>
      <IoWarning className="text-5xl mx-auto" />
      <h1 className="text-4xl font-bold">Ooopss!</h1>
      <p className="text-xl font-medium mt-2">Maaf, halaman yang sedang kamu cari tidak ada.</p>
      <ButtonBack />
    </>
  );
};
