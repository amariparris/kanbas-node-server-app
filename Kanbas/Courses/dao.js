import CourseModel from "./model.js";

export const createCourse = (course) => {
    if (course._id) delete course._id; // Ensure no _id is being set manually
    return CourseModel.create(course);
};

export const findAllCourses = () => {
    return CourseModel.find();
};

export const findCourseById = (courseId) => {
    return CourseModel.findById(courseId);
};


export const updateCourse = (courseId, course) => {
    return CourseModel.updateOne({ _id: courseId }, { $set: course });
};


export const deleteCourse = (courseId) => {
    return CourseModel.deleteOne({ _id: courseId });
};

export const findCourseByCode = (courseCode) => {
    return CourseModel.findOne({ courseCode: courseCode });
};
