'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface Timetable {
  id?: number
  semester: string
  courses: number
  createdDate: string
}

interface TimetableModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (timetable: Timetable) => void
  initialData?: Timetable
  mode: 'add' | 'edit'
}

export function TimetableModal({ isOpen, onClose, onSubmit, initialData, mode }: TimetableModalProps) {
  const [formData, setFormData] = useState<Timetable>(
    initialData || {
      semester: '',
      courses: 0,
      createdDate: new Date().toISOString().split('T')[0],
    }
  )

  type TimetableErrors = Partial<Record<keyof Timetable, string>>

  const [errors, setErrors] = useState<TimetableErrors>({})

  const validateForm = () => {
    const newErrors: TimetableErrors = {}
    if (!formData.semester.trim()) newErrors.semester = 'Semester is required'
    if (formData.courses <= 0) newErrors.courses = 'Number of courses must be greater than 0'
    if (!formData.createdDate) newErrors.createdDate = 'Creation date is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      setFormData({
        semester: '',
        courses: 0,
        createdDate: new Date().toISOString().split('T')[0],
      })
      onClose()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'courses' ? parseInt(value) || 0 : (value as any)
    }))
    if (errors[name as keyof Timetable]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {mode === 'add' ? 'Create Timetable' : 'Edit Timetable'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Semester */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Semester
            </label>
            <input
              type="text"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="e.g., 2024 Semester 1"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.semester ? 'border-destructive' : 'border-border'
              }`}
            />
            {errors.semester && <p className="text-xs text-destructive mt-1">{errors.semester as any}</p>}
          </div>

          {/* Number of Courses */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Courses
            </label>
            <input
              type="number"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              placeholder="e.g., 45"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.courses ? 'border-destructive' : 'border-border'
              }`}
            />
            {errors.courses && <p className="text-xs text-destructive mt-1">{errors.courses as any}</p>}
          </div>

          {/* Creation Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Creation Date
            </label>
            <input
              type="date"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.createdDate ? 'border-destructive' : 'border-border'
              }`}
            />
            {errors.createdDate && <p className="text-xs text-destructive mt-1">{errors.createdDate as any}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {mode === 'add' ? 'Create Timetable' : 'Update Timetable'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}