import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    // const params=useParams();
    const { id } = useParams();
    // console.log(params)

    const [data, setData] = useState({});
    console.log(data)
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5550/api/user/${id}`
            );
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (
        <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
            <div className="max-w-[343px] md:max-w-[550px] w-full flex flex-col gap-5 bg-white px-4 md:px-8 py-6 md:py-8 rounded-md shadow-sm shadow-slate-300">
                <h1 className="text-center font-bold text-3xl">Update User</h1>
                <div className="w-full flex flex-row gap-2">
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                            First Name
                        </label>
                        <input
                            id="fname"
                            //   value={data.fname || ''}
                            //   onChange={handleChange}
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
                            //   value={data.lname || ''}
                            //   onChange={handleChange}
                            type="text"
                            className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                        />
                    </div>
                </div>
                {/* Other input fields */}
                <button
                    type="submit"
                    className="bg-[#437EF7] text-white py-3 rounded-sm"
                >
                    Update User
                </button>
            </div>
        </div>
    );
};

export default UpdateUser;
