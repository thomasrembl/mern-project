const UserModel = require("../models/user.model");
const fs = require("fs");
const { uploadErrors } = require("../utils/errors.utils");
const path = require("path");

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      req.file.mimetype != "image/jpg" &&
      req.file.mimetype != "image/png" &&
      req.file.mimetype != "image/jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }

  const fileName = req.body.name + ".jpg";

  const destinationDir = path.join(
    __dirname,
    "../client/public/uploads/profil/"
  );
  const destinationPath = path.join(destinationDir, fileName);

  try {
    await fs.promises.writeFile(destinationPath, req.file.buffer);
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.send(updatedUser);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
