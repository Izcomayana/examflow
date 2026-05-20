'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, MapPin, Users } from 'lucide-react'
import { HallModal } from '../(modals)/hall-modal'
import { useHallStore } from '@/store/hall-store'

interface Hall {
  id: number
  name: string
  building: string
  capacity: number
  availability: 'available' | 'booked' | 'maintenance'
  floor: string
}

export function HallsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add')
  const [selectedHall, setSelectedHall] = useState<Hall | undefined>()

  const {
    halls,
    addHall,
    updateHall,
    deleteHall,
  } = useHallStore()

  const openAddModal = () => {
    setModalMode('add')
    setSelectedHall(undefined)
    setIsModalOpen(true)
  }

  const openEditModal = (hall: Hall) => {
    setModalMode('edit')
    setSelectedHall(hall)
    setIsModalOpen(true)
  }

  const handleModalSubmit = (
    hallData: Omit<Hall, 'id'>
  ) => {
    if (modalMode === 'add') {
      addHall(hallData)
    } else if (selectedHall) {
      updateHall(
        selectedHall.id,
        {
          ...hallData,
          id: selectedHall.id,
        }
      )
    }
  }

  const handleDeleteHall = (
    id: number
  ) => {
    deleteHall(id)
  }

  return (
    <div className="space-y-6 pt-16">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Halls & Venues</h1>
          <p className="text-muted-foreground mt-1">Manage examination halls and their details</p>
        </div>
        <Button onClick={openAddModal} className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add Hall
        </Button>
      </div>

      {/* Halls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Halls Grid / Empty State */}
        {halls.length > 0 ? (
          <>
            {halls.map((hall) => (
              <div
                key={hall.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Hall Name and Status Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {hall.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {hall.building}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${hall.availability === 'available'
                      ? 'bg-secondary/10 text-secondary'
                      : hall.availability === 'booked'
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'bg-orange-500/10 text-orange-600'
                      }`}
                  >
                    {hall.availability === 'available'
                      ? 'Available'
                      : hall.availability === 'booked'
                        ? 'Booked'
                        : 'Maintenance'}
                  </span>
                </div>

                {/* Hall Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      Capacity:{' '}
                      <span className="font-semibold text-foreground">
                        {hall.capacity} students
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>
                      Location:{' '}
                      <span className="font-semibold text-foreground">
                        {hall.floor}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(hall)}
                    className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-primary/30"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteHall(hall.id)
                    }
                    className="flex-1 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-red-500/30"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              No halls added yet
            </h3>

            <p className="text-muted-foreground max-w-md mb-6">
              Start by adding examination halls and
              venues so ExamFlow can intelligently
              allocate spaces during timetable
              generation.
            </p>

            <Button
              onClick={openAddModal}
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Hall
            </Button>
          </div>
        )}
      </div>

      {/* Hall Modal */}
      <HallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={selectedHall}
        mode={modalMode}
      />
    </div>
  )
}
