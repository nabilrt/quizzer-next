import { Fragment } from "react";
import Image from "next/image";
const LanguageTable = () => {
  return (
    <div className="flex flex-col space-y-3 w-full border border-slate-50 shadow-md p-2">
      <div className="text-start text-xl">Top 5 Languages by Quiz</div>
      <table className="text-center  table-auto p-4">
        <thead className="bg-gradient-to-r from-[#5614B0] to-[#DBD65C] border-separate border-spacing-2 text-white  border-slate-500">
          <tr>
            <th>#</th>
            <th></th>
            <th>Language</th>
            <th>No. of Quiz</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="hover:bg-slate-50">
            <td>1</td>
            <td>
              <Image
                src={"/js.png"}
                height={25}
                width={25}
                className="text-center rounded-full"
              />
            </td>
            <td>JavaScript</td>
            <td>7</td>
          </tr>
          <tr className="hover:bg-slate-50  bg-slate-100">
            <td>2</td>
            <td className="m-auto">
              <Image
                src={"/python.png"}
                height={25}
                width={25}
                className="text-center rounded-full"
              />
            </td>
            <td>Python</td>
            <td>5</td>
          </tr>
          <tr  className="hover:bg-slate-50">
            <td>3</td>
            <td className="m-auto">
              <Image
                src={"/c++.png"}
                height={25}
                width={25}
                className="text-center rounded-full"
              />
            </td>
            <td>C++</td>
            <td>3</td>
          </tr>
          <tr className=" hover:bg-slate-50 bg-slate-100">
            <td>4</td>
            <td className="m-auto">
              <Image
                src={"/csharp.png"}
                height={25}
                width={25}
                className="text-center rounded-full"
              />
            </td>
            <td>C#</td>
            <td>1</td>
          </tr>
          <tr className="hover:bg-slate-50">
          <td>5</td>
          <td className="m-auto">
            <Image
              src={"/sql.png"}
              height={25}
              width={25}
              className="text-center rounded-full"
            />
          </td>
          <td>SQL</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LanguageTable;
