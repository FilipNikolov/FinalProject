const fs = require("fs");
const { makeID } = require("../../../pkg/strings");
const config = require("../../../pkg/config");

const DATA_SIZE = 1048576;
const DATA_TYPE = ["image/jpeg", "image/png", "image/pjpeg", "image/gif", "image/jpg"];

const upload = async (req, res) => {
    if (DATA_SIZE < req.files.document.size) {
        return res.status(400).send("File upload is too large");
    }

    if (!DATA_TYPE.includes(req.files.document.mimetype)) {
        return res.status(404).send("File type is not supported");
    }

    const userDir = `user_${req.user.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    const fileName = `${makeID(6)}_${req.files.document.name}`;
    const filePath = `${userDirPath}/${fileName}`;

    const fullFileName = `${userDir}/${fileName}`;
    req.files.document.mv(filePath, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        return res.status(201).send({ file_name: fullFileName });
    });
};
const uploadAvatar = async (req, res) => {
    if (DATA_SIZE < req.files.document.size) {
        return res.status(400).send("File upload is too large");
    }

    if (!DATA_TYPE.includes(req.files.document.mimetype)) {
        return res.status(404).send("File type is not supported");
    }

    const userDir = `user_${req.user.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    const fileName = `${makeID(6)}_${req.files.document.name}`;
    const filePath = `${userDirPath}/${fileName}`;

    const fullFileName = `${userDir}/${fileName}`;
    req.files.document.mv(filePath, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        return res.status(201).send({ file_name: fullFileName });
    });
};
const download = async (req, res) => {
    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;
    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not foud");
    }
    res.download(filePath);
};
const remove = async (req, res) => {
    let userDir = `uploads`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;
    const filePath = `${userDirPath}/${fileName}`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        return res.status(204).send('File deleted');
    }
};

module.exports = {
    upload,
    uploadAvatar,
    download,
    remove,
};
