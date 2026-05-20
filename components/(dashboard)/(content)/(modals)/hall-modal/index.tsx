'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface Hall {
  id?: number | string
  name: string
  building: string
  floor: string
  capacity: number
  availability: 'available' | 'booked' | 'maintenance'
}

interface HallModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (hall: Hall) => void
  initialData?: Hall
  mode: 'add' | 'edit'
}

export function HallModal({ isOpen, onClose, onSubmit, initialData, mode }: HallModalProps) {
  const emptyForm = {
    name: '',
    building: '',
    floor: '',
    capacity: 0,
    availability:
      'available' as const,
  }

  const [formData, setFormData] =
    useState<Hall>(emptyForm);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    } else {
      setFormData(emptyForm)
    }
  }, [initialData, isOpen])

  type HallErrors = Partial<Record<keyof Hall, string>>

  const [errors, setErrors] = useState<HallErrors>({})

  const validateForm = () => {
    const newErrors: HallErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Hall name is required'
    if (!formData.building.trim()) newErrors.building = 'Building is required'
    if (!formData.floor.trim()) newErrors.floor = 'Floor is required'
    if (formData.capacity <= 0) newErrors.capacity = 'Capacity must be greater than 0'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      setFormData({
        name: '',
        building: '',
        floor: '',
        capacity: 0,
        availability: 'available',
      })
      onClose()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'capacity' ? parseInt(value) || 0 : (value as any)
    }))
    if (errors[name as keyof Hall]) {
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
            {mode === 'add' ? 'Add Hall' : 'Edit Hall'}
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
          {/* Hall Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Hall Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Hall A"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name as any}</p>}
          </div>

          {/* Building */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Building
            </label>
            <input
              type="text"
              name="building"
              value={formData.building}
              onChange={handleChange}
              placeholder="e.g., Academic Block 1"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.building ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.building && <p className="text-xs text-destructive mt-1">{errors.building as any}</p>}
          </div>

          {/* Floor */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Floor
            </label>
            <select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.floor ? 'border-destructive' : 'border-border'
                }`}
            >
              <option value="">Select Floor</option>
              <option value="Basement">Basement</option>
              <option value="Ground Floor">Ground Floor</option>
              <option value="1st Floor">1st Floor</option>
              <option value="2nd Floor">2nd Floor</option>
              <option value="3rd Floor">3rd Floor</option>
            </select>
            {errors.floor && <p className="text-xs text-destructive mt-1">{errors.floor as any}</p>}
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="e.g., 150"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.capacity ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.capacity && <p className="text-xs text-destructive mt-1">{errors.capacity as any}</p>}
          </div>

          {/* Availability Status */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Availability Status
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="maintenance">Under Maintenance</option>
            </select>
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
              {mode === 'add' ? 'Add Hall' : 'Update Hall'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
