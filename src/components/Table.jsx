import React, { useState } from "react";

const Table = ({ data, deleteRecord, editRecord }) => {
  //   console.log(data);
  //   const [items, setitems] = useState(data);
  //   console.log(items);
  //   const deleteRecord = (i) => {
  //     const updateditems = items.filter((e, index) => {
  //       return index !== i;
  //     });
  //     setitems(updateditems);
  //   };

  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Edit
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, index) => {
              return (
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ele.name}
                  </th>
                  <td class="px-6 py-4">{ele.mobile}</td>
                  <td class="px-6 py-4">{ele.email}</td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => {
                        editRecord(index);
                      }}
                      className="border-gray-200 border  text-gray-500 px-4 py-1 rounded-lg "
                    >
                      Edit
                    </button>
                  </td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => {
                        deleteRecord(index);
                      }}
                      className="border-red-400 border  text-red-500 px-4 py-1 rounded-lg "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
