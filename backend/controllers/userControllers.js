const HttpError = require("../utils/Http-Error");
const User = require("../models/UserModel");
// const bcrypt = require ( bcryptjs)
const signup = async (req, res, next) => {
  // check vaildness
  let Name = req.body.Name;
  let PersonalEmail = req.body.PersonalEmail;
  let PhoneNumber = req.body.PhoneNumber;
  let Password = req.body.Password;

  let existingUser;
  try {
    existingUser = await User.findOne({ PersonalEmail: PersonalEmail });
  } catch (error) {
    return next(new HttpError("signning up failed try again later", 500));
  }

  if (existingUser) {
    return next(new HttpError("User already exist try again later", 422));
  }

  let hashPassword;
  try {
    hashPassword = await bcrypt.hash(Password, 12);
  } catch (error) {
    return next(new HttpError("Could not create user , try again later ", 500));
  }

  const createUser = new User({
    Name: Name,
    PersonalEmail: PersonalEmail,
    PhoneNumber: PhoneNumber,
    Password: hashPassword,
  });
  let newUser;
  try {
    newUser = await createUser.save();
  } catch (error) {
    return next(new HttpError("Signning up failed try again later ", 500));
  }
  res.status(201).json({
    UserId: createUser._id, // store in local stroge in frontend or cookies
  });
};

const login = async (req, res, next) => {
  let PersonalEmail = req.body.PersonalEmail;
  let Password = req.body.Password;

  let existingUser;
  try {
    existingUser = await User.findOne({ PersonalEmail: PersonalEmail });
  } catch (error) {
    return next(new HttpError("Logging up failed try agin later ", 500));
  }

  if (!existingUser) {
    return next(new HttpError("wrong credentials", 422));
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(Password, existingUser.Password);
  } catch (err) {
    return next(
      new HttpError(
        "Could not log you in, please check your credentials and try again.",
        500
      )
    );
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  res.json({
    UserId: existingUser._id,
  });
};

const onbording = async (req, res, next) => {
  let CollegeName = req.body.CollegeName;
  let YearOfPassing = req.body.YearOfPassing;
  let WorkExperience = req.body.WorkExperience;
  let GitHubURL = req.body.GitHubURL;
  let LinkdienURL = req.body.LinkdienURL;
  let Skills = req.body.Skills;

  if (!CollegeName) return new HttpError(" require College Name", 403);
  if (!Skills) return new HttpError(" require atleast one Skill", 403);

  let userId = req.params.UserID; 

  let existingUser;
  try {
    existingUser = await User.findById ( userId);
  } catch (error) {
    return next(new HttpError("Logging up failed try agin later ", 500));
  }

  if (!existingUser) {
    return next(new HttpError("wrong credentials", 422));
  }

  existingUser.CollegeName = CollegeName;
  existingUser.YearOfPassing = YearOfPassing;
  existingUser.WorkExperience = WorkExperience ;
  existingUser.GitHubURL= GitHubURL;
  existingUser.LinkdienURL = LinkdienURL ;
  existingUser.Skills = Skills ;
  
   
  try {
     await existingUser.save();
  }catch( error ){
    return new HttpError (" error occured"  , 401);
  }
   res.send (" use oborded");
};

exports.signup = signup;
exports.login = login;
exports.onbording = onbording;
