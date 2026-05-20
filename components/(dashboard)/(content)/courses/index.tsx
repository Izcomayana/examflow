'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, Plus, Edit, Trash2, MoreVertical } from 'lucide-react'
import { CourseModal } from '../(modals)/course-modal'
import { useCourseStore } from '@/store/course-store'
import { useSearchParams } from 'next/navigation'

interface Course {
  id: number
  code: string
  name: string
  department: string
  level: string
  students: number
}

export function CoursesContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [levelFilter, setLevelFilter] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add')
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>()

  const {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
  } = useCourseStore()

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.code
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      course.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

    const matchesDepartment =
      !departmentFilter ||
      course.department === departmentFilter

    const matchesLevel =
      !levelFilter ||
      course.level === levelFilter

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesLevel
    )
  })

  const openAddModal = () => {
    setModalMode('add')
    setSelectedCourse(undefined)
    setIsModalOpen(true)
  }

  const openEditModal = (course: Course) => {
    setModalMode('edit')
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const handleModalSubmit = (
    courseData: Omit<Course, 'id'>
  ) => {
    if (modalMode === 'add') {
      addCourse(courseData)
    } else if (selectedCourse) {
      updateCourse(
        selectedCourse.id,
        {
          ...courseData,
          id: selectedCourse.id,
        }
      )
    }
  }

  const handleDeleteCourse = (
    id: number
  ) => {
    deleteCourse(id)
  }

  const searchParams =
  useSearchParams()

const openModalQuery =
  searchParams.get('openModal')

  useEffect(() => {
  if (openModalQuery === 'true') {
    openAddModal()
  }
}, [openModalQuery])
  return (
    <div className="space-y-6 pt-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Course Management</h1>
          <p className="text-muted-foreground mt-1">Manage all exam courses and their details</p>
        </div>
        <Button onClick={openAddModal} className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Filters Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search course code or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>

          {/* Department Filter */}
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white"
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>

          {/* Level Filter */}
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white"
          >
            <option value="">All Levels</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
          </select>

          {/* Results Counter */}
          <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-2">
            <span className="text-sm text-muted-foreground">Results:</span>
            <span className="text-lg font-bold text-primary">{filteredCourses.length}</span>
          </div>
        </div>
      </div>

      {/* Courses Table */}
      {filteredCourses.length > 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-primary">{course.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-foreground font-medium">{course.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-muted-foreground">{course.department}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-100 text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-foreground font-medium">{course.students}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEditModal(course)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                        </button>
                        <button onClick={() => handleDeleteCourse(course.id)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">No courses found</p>
          <Button onClick={openAddModal} className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Course
          </Button>
        </div>
      )}

      {/* Course Modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={selectedCourse}
        mode={modalMode}
      />
    </div>
  )
}
