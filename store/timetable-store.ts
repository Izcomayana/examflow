import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Timetable {
  id: number
  course: string
  hall: string
  date: string
  time: string
}

interface TimetableStore {
  timetable: Timetable[]

  setTimetable: (
    data: Timetable[]
  ) => void

  clearTimetable: () => void
}

export const useTimetableStore =
  create<TimetableStore>()(
    persist(
      (set) => ({
        timetable: [],

        setTimetable: (data) =>
          set({
            timetable: data,
          }),

        clearTimetable: () =>
          set({
            timetable: [],
          }),
      }),
      {
        name: 'examflow-timetable',
      }
    )
  )