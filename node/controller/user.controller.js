import db from "../db.js";

export const createUser = (req, res) => {
    const { name, email, phone, password, hobby, address } = req.body;
    const sql = "select * from user where email=?";
    db.query(sql, email, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length > 0) {
                res.send({
                    statusCode: 300,
                    message: "Email already exists!!",
                });
            } else {
                // console.log("i am here")
                const sql = "select * from user where phone=?";
                db.query(sql, phone, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        if (data.length > 0) {
                            res.send({
                                statusCode: 300,
                                message: "phone already exists",
                            });
                        } else {
                            const sql =
                                "insert into user(name,email,password,address,phone,hobby) values(?,?,?,?,?,?)";
                            const values = [
                                name,
                                email,
                                password,
                                address,
                                phone,
                                hobby,
                            ];
                            db.query(sql, values, (err, result) => {
                                if (err) {
                                    res.send(err);
                                } else {
                                    res.send({
                                        statusCode: 200,
                                        message: "User Added sucessfully!!",
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
    });
};

export const getUser = (req, res) => {
      const sql="select * from user"
      db.query(sql,(err,data)=>{
        if(err) res.send(err)
            else res.send(data)
      })
};
export const getUserById = (req, res) => {
    const id=parseInt(req.params.id)
      const sql="select * from user where user_id=?"
      db.query(sql,id,(err,data)=>{
        if(err) res.send(err)
            else res.send(data[0])
      })
};
export const updateUser = (req, res) => {
    const { name, email, password, address, phone, hobby  } = req.body;
    const id = parseInt(req.params.id);

    const sql = "UPDATE user SET  name=?, email=?, password=?, address=?, phone=?, hobby=? WHERE user_id=?";
    const values=[name,email,password,address,phone,hobby,id]

    db.query(sql, values, (err, result) => {
        if (err) {
            return res
                .status(500)
                .send({ statusCode: 500, message: "Something went wrong!!" });
        }

        res.send({ statusCode: 200, message: "User updated successfully!" });
    });
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "delete from user where user_id=?";
    db.query(sql, id, (err, data) => {
        if (err) res.sed(err);
        res.send({ data: data, message: "user deleted sucessfully" });
    });
};



