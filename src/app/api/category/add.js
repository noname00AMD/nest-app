import categoryModel from "../../../model/category"
// import helper from "../../../helper"
import validator from "validator";
import prisma from "../../../prisma/prisma"
import formidable from "formidable";
import fs from "fs"
import mime from "mime"
export default async function handler(req, res) {
    return new Promise(async (resolve, reject) => {
        var date = new Date();
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        var today = year + "/" + month + "/" + day
        var uploadDir = process.env.ROOT_DIR || process.cwd() + "/public/images/" + today
        function onError(err) {
            res.json({
                error: err.error,
                title: err.title,
                message: err.message,
                level: err.level
            })
            return resolve()
        }

        fs.access(uploadDir, (err) => {
            if (err && err.code === "ENOENT") {
                fs.mkdir(uploadDir, { recursive: true }, (err, path) => {
                    if (err) {
                        return onError({
                            error: true,
                            title: 'Upload failed',
                            message: 'cant makdir',
                            level: 'error'
                        })
                    }
                    handle()
                });
            }
            handle()
        })
        function handle() {
            const form = formidable({
                maxFiles: 1,
                maxFileSize: 300 * 1024,
                multiples: true,
                uploadDir: uploadDir,
            });
            // var date1 = new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0');
            form.parse(req, (err, fields, files) => {
                if (err) {
                    return onError({
                        error: true,
                        title: 'Upload failed',
                        message: JSON.stringify(err),
                        level: 'error'
                    })
                }
                if (Object.keys(files).length > 1) {
                    return onError({
                        error: true,
                        title: 'Upload failed',
                        message: '1 thumbImg',
                        level: 'error'
                    })
                }
                // validator.

                fs.rename(files.thumbImg.filepath, uploadDir + "/" + files.thumbImg.size + "-" + files.thumbImg.newFilename + "." + mime.getExtension(files.thumbImg.mimetype), function (err) {
                    if (err) {
                        return onError({
                            error: true,
                            title: 'Upload failed',
                            message: err,
                            level: 'error'
                        })
                    }

                    res.json({
                        test: fields.description,
                        "default": "/images/" + today + "/" + files.thumbImg.size + "-" + files.thumbImg.newFilename + "." + mime.getExtension(files.thumbImg.mimetype)
                    })
                    resolve()
                });
            })
        }


    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};
