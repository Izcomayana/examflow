import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Hall {
  id: number
  name: string
  building: string
  floor: string
  capacity: number
  availability:
    | 'available'
    | 'booked'
    | 'maintenance'
}

interface HallStore {
  halls: Hall[]

  addHall: (
    hall: Omit<Hall, 'id'>
  ) => void

  updateHall: (
    id: number,
    updatedHall: Hall
  ) => void

  deleteHall: (id: number) => void
}

export const useHallStore =
  create<HallStore>()(
    persist(
      (set) => ({
        halls: [],

        addHall: (hall) =>
          set((state) => ({
            halls: [
              ...state.halls,
              {
                ...hall,
                id: Date.now(),
              },
            ],
          })),

        updateHall: (
          id,
          updatedHall
        ) =>
          set((state) => ({
            halls: state.halls.map(
              (hall) =>
                hall.id === id
                  ? {
                      ...updatedHall,
                      id,
                    }
                  : hall
            ),
          })),

        deleteHall: (id) =>
          set((state) => ({
            halls:
              state.halls.filter(
                (hall) =>
                  hall.id !== id
              ),
          })),
      }),
      {
        name: 'examflow-halls',
      }
    )
  )