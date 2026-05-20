'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface Course {
  id?: number
  code: string
  name: string
  department: string
  level: string
  students: number
  status?: string
}

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (course: Course) => void
  initialData?: Course
  mode: 'add' | 'edit'
}

export function CourseModal({ isOpen, onClose, onSubmit, initialData, mode }: CourseModalProps) {
  const emptyForm = {
    code: '',
    name: '',
    department: '',
    level: '',
    students: 0,
  }

  const [formData, setFormData] =
    useState<Course>(emptyForm);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    } else {
      setFormData(emptyForm)
    }
  }, [initialData, isOpen])

  type CourseErrors = Partial<Record<keyof Course, string>>

  const [errors, setErrors] = useState<CourseErrors>({})

  const validateForm = () => {
    const newErrors: CourseErrors = {}

    if (!formData.code.trim()) {
      newErrors.code = 'Course code is required'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Course name is required'
    }

    if (!formData.department.trim()) {
      newErrors.department = 'Department is required'
    }

    if (!formData.level.trim()) {
      newErrors.level = 'Level is required'
    }

    if (formData.students < 0) {
      newErrors.students = 'Students must be a positive number'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      setFormData({
        code: '',
        name: '',
        department: '',
        level: '',
        students: 0,
      })
      onClose()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'students' ? parseInt(value) || 0 : value
    }))
    if (errors[name as keyof Course]) {
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
            {mode === 'add' ? 'Add Course' : 'Edit Course'}
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
          {/* Course Code */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Course Code
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="e.g., CSC401"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.code ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.code && <p className="text-xs text-destructive mt-1">{errors.code as any}</p>}
          </div>

          {/* Course Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Course Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Data Structures"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name as any}</p>}
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.department ? 'border-destructive' : 'border-border'
                }`}
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Engineering">Engineering</option>
            </select>
            {errors.department && <p className="text-xs text-destructive mt-1">{errors.department as any}</p>}
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.level ? 'border-destructive' : 'border-border'
                }`}
            >
              <option value="">Select Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            {errors.level && <p className="text-xs text-destructive mt-1">{errors.level as any}</p>}
          </div>

          {/* Students */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Students
            </label>
            <input
              type="number"
              name="students"
              value={formData.students}
              onChange={handleChange}
              placeholder="e.g., 85"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.students ? 'border-destructive' : 'border-border'
                }`}
            />
            {errors.students && <p className="text-xs text-destructive mt-1">{errors.students as any}</p>}
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
              {mode === 'add' ? 'Add Course' : 'Update Course'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
