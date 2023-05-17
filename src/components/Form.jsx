import React, { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [form, setform] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);
  const [record, setrecord] = useState([]);
  const [newRecord, setnewRecord] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setform({ ...form, [name]: value });
    // console.log(form);
  };
  const submit = () => {
    if (editingIndex === -1) {
      setrecord([...record, form]);
    } else {
      const updatedRecord = [...record];
      updatedRecord[editingIndex] = form;
      setrecord(updatedRecord);
      setEditingIndex(-1);
    }
    setform({ name: "", mobile: "", email: "" });
    console.log(record);
  };
  const deleteRecord = (i) => {
    const updateditems = record.filter((e, index) => {
      return index !== i;
    });
    setrecord(updateditems);
  };
  const editRecord = (i) => {
    setform({
      name: record[i].name,
      mobile: record[i].mobile,
      email: record[i].email,
    });
    setEditingIndex(i);
  };
  return (
    <>
      <div className="w-full mt-4  flex justify-center ">
        <div className="w-4/5">
          <div className="my-4 text-3xl  font-sans font-semibold">Web Form</div>
          <div class="w-full">
            <form class="">
              <div class="my-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Name
                </label>
                <input
                  class="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div class="my-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Mobile
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>
              <div class="my-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="Mobile"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={submit}
                >
                  {editingIndex === -1 ? "Submit" : "Save"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-20">
            <Table
              editRecord={editRecord}
              deleteRecord={deleteRecord}
              data={record}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
