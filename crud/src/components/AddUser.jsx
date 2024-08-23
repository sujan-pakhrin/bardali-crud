import React from "react";

const AddUser = () => {
  const handleChange=()=>{

  }
    return (
        <div>
            <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
                <div className="max-w-[343px] md:max-w-[550px] w-full flex flex-col gap-5 bg-white px-4 md:px-8 py-6 md:py-8 rounded-md shadow-sm shadow-slate-300">
                      <h1 className="text-center font-bold text-3xl">Add User</h1>
                    {/* <div className="w-full flex flex-row gap-2">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                                First Name
                            </label>
                            <input
                                id="fname"
                                onChange={handleChange}
                                type="text"
                                className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                                Last Name
                            </label>
                            <input
                                id="lname"
                                onChange={handleChange}
                                type="text"
                                className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                            />
                        </div>
                    </div> */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                            Email
                        </label>
                        <input
                            id="email"
                            onChange={handleChange}
                            type="text"
                            className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                            Password
                        </label>
                        <input
                            id="password"
                            onChange={handleChange}
                            type="password"
                            className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                            Phone
                        </label>
                        <input
                            id="phone"
                            onChange={handleChange}
                            type="text"
                            className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                            Date of birth
                        </label>
                        <input
                            id="dob"
                            onChange={handleChange}
                            type="date"
                            className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#437EF7] text-white py-3 rounded-sm"
                    >
                        Sign Up
                    </button>
                    <div className="flex justify-between">
                        <span className="text-[16px] leading-[20px] tracking-[-0.32px] ">
                            Already have an account
                        </span>
                        <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-[#437EF7] cursor-pointer">
                            Sign In
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
