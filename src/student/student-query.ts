import { prisma } from "../server";
import { QueryResolvers } from "../_generated/graphql";

export const studentsQueryResolver: QueryResolvers["getStudents"] =
  async () => {
    const students = await prisma.student.findMany({
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true,
          },
        },
      },
    });
    if (!students) {
      throw new Error("No students found");
    }
    return students;
  };

export const studentQueryResolver: QueryResolvers["getStudent"] = async (
  _,
  { id }: any
) => {
  const student = await prisma.student.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      age: true,
      email: true,
      address: true,
      guardian: true,
      password: true,
      courseId: true,
      createdAt: true,
      updatedAt: true,
      course: {
        select: {
          id: true,
          title: true,
          description: true,
        },
      },
    },
  });
  if (!student) {
    throw new Error("Student not found");
  }
  return student;
};

export const getStudentsUnderCourseResolver: QueryResolvers["getStudentsUnderCourse"] =
  async (_, { id }: any) => {
    const studentsUnderCourse = await prisma.student.findMany({
      where: {
        course: {
          id: {
            equals: id,
          },
        },
      },
      include: {
        course: {
          select: {
            title: true,
          },
        },
      },
    });
    if (!studentsUnderCourse) {
      throw new Error("No students found");
    }
    return studentsUnderCourse;
  };

export const getStudentWithAgeResolver: QueryResolvers["getStudentsWithAge"] =
  async (_, { age }: any) => {
    const studentsWithAge = await prisma.student.findMany({
      where: {
        age: {
          lte: age,
        },
      },
      orderBy: {
        name: "asc",
      },
      include: {
        course: {
          select: {
            title: true,
          },
        },
      },
    });
    if (!studentsWithAge) {
      throw new Error("No students found");
    }
    return studentsWithAge;
  };
