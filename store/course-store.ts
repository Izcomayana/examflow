import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Course {
  id: number
  code: string
  name: string
  department: string
  level: string
  students: number
}

interface CourseStore {
  courses: Course[]

  addCourse: (course: Omit<Course, 'id'>) => void

  updateCourse: (id: number, updatedCourse: Course) => void

  deleteCourse: (id: number) => void
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set) => ({
      courses: [],

      addCourse: (course) =>
        set((state) => ({
          courses: [
            ...state.courses,
            {
              ...course,
              id: Date.now(),
            },
          ],
        })),

      updateCourse: (id, updatedCourse) =>
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === id
              ? { ...updatedCourse, id }
              : course
          ),
        })),

      deleteCourse: (id) =>
        set((state) => ({
          courses: state.courses.filter(
            (course) => course.id !== id
          ),
        })),
    }),
    {
      name: 'examflow-courses',
    }
  )
)