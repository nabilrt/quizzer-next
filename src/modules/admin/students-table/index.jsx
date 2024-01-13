import { Fragment } from "react";
import Image from "next/image";
const StudentsTable = () => {
  return (
    <div className="flex flex-col space-y-3 w-full border border-slate-50 shadow-md p-2 ">
      <div className="text-start text-xl">Top 5 Students</div>
      <table className="text-center table-auto p-4">
        <thead className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] border-separate border-spacing-2 text-white  border-slate-500">
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="hover:bg-slate-50 ">
            <td>1</td>
            <td>
              <Image
                src={"/avatar.png"}
                height={25}
                width={25}
                className="text-center"
              />
            </td>
            <td>Abidur Rahman Nabil</td>
            <td>100</td>
          </tr>
          <tr className="hover:bg-slate-50  bg-slate-100">
            <td>2</td>
            <td className="m-auto">
              <Image src={"/avatar3.png"} height={25} width={25} className="" />
            </td>
            <td>Arpita </td>
            <td>70</td>
          </tr>
          <tr className="hover:bg-slate-50  ">
            <td>3</td>
            <td className="m-auto">
              <Image src={"/avatar5.png"} height={25} width={25} className="" />
            </td>
            <td>Sazin </td>
            <td>50</td>
          </tr>
          <tr className=" hover:bg-slate-50 bg-slate-100">
            <td>4</td>
            <td className="m-auto">
              <Image src={"/avatar1.png"} height={25} width={25} className="" />
            </td>
            <td>Mahim </td>
            <td>60</td>
          </tr>
          <tr className=" hover:bg-slate-50 ">
            <td>5</td>
            <td className="m-auto">
              <Image src={"/avatar2.png"} height={25} width={25} className="" />
            </td>
            <td>Adhir </td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
