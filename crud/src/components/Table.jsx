import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Table = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const navigate = useNavigate();

    const fetchData = async () => {
        await axios
            .get("http://localhost:5550/api/user")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleUpdate = (user_id) => {
        // Navigate to the update page with user_id
        navigate(`/user/${user_id}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex justify-center mt-10">
            <div className="text-end max-w-[1300px] w-full flex flex-col gap-8 justify-center">
                <div className="text-end">
                    <button
                        onClick={() => navigate("/adduser")}
                        className="bg-[#437EF7] py-2 px-6 rounded-md text-white"
                    >
                        Add User
                    </button>
                </div>
                <div>
                    <div style={{ height: "100%", width: "100%" }}>
                        <DataGrid
                            rows={data}
                            columns={[
                                {
                                    field: "user_id",
                                    headerName: "ID",
                                    width: 50,
                                },
                                {
                                    field: "name",
                                    headerName: "Name",
                                    width: 150,
                                },
                                {
                                    field: "email",
                                    headerName: "Email",
                                    width: 190,
                                },
                                {
                                    field: "phone",
                                    headerName: "Phone",
                                    width: 170,
                                },
                                {
                                    field: "password",
                                    headerName: "Password",
                                    width: 130,
                                },
                                {
                                    field: "address",
                                    headerName: "Address",
                                    width: 150,
                                },
                                {
                                    field: "hobby",
                                    headerName: "Hobby",
                                    width: 140,
                                },
                                {
                                    field: "action",
                                    headerName: "Action",
                                    width: 120,
                                    renderCell: (params) => (
                                        <Button>
                                            <button
                                                onClick={() =>
                                                    handleUpdate(
                                                        params.row.user_id
                                                    )
                                                }
                                                className="bg-[#437EF7] text-white px-6 py-2 rounded-md"
                                            >
                                                Update
                                            </button>
                                        </Button>
                                    ),
                                },
                                {
                                    field: " ",
                                    headerName: "",
                                    width: 120,
                                    renderCell: () => (
                                        <Button>
                                            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                                                Delete
                                            </button>
                                        </Button>
                                    ),
                                },
                            ]}
                            getRowId={(row) => row.user_id}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
                <div className="px-20 py-7 bg-green-500 shadow-lg shadow-gray-400 absolute top-1 left-[35%] rounded-lg flex flex-col gap-5">
                    <div >

                    <p>Are sure you want to delete this user</p>
                    </div>
                    <div className="flex justify-between ">
                        <button className="bg-red-500 text-white px-6 py-2 rounded-md">Cancel</button>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md" >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
