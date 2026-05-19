'use client'

import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, MapPin, Users } from 'lucide-react'

const mockHalls = [
  {
    id: 1,
    name: 'Hall A',
    building: 'Academic Block 1',
    capacity: 150,
    availability: 'available',
    floor: 'Ground Floor',
  },
  {
    id: 2,
    name: 'Hall B',
    building: 'Academic Block 1',
    capacity: 120,
    availability: 'available',
    floor: '1st Floor',
  },
  {
    id: 3,
    name: 'Hall C',
    building: 'Academic Block 2',
    capacity: 100,
    availability: 'maintenance',
    floor: 'Ground Floor',
  },
  {
    id: 4,
    name: 'Hall D',
    building: 'Science Complex',
    capacity: 80,
    availability: 'available',
    floor: '2nd Floor',
  },
  {
    id: 5,
    name: 'Hall E',
    building: 'Science Complex',
    capacity: 200,
    availability: 'available',
    floor: 'Basement',
  },
  {
    id: 6,
    name: 'Hall F',
    building: 'Admin Building',
    capacity: 60,
    availability: 'available',
    floor: '1st Floor',
  },
]

export function HallsContent() {
  return (
    <div className="space-y-6 pt-18">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Halls & Venues</h1>
          <p className="text-muted-foreground mt-1">Manage examination halls and their details</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add Hall
        </Button>
      </div>

      {/* Halls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockHalls.map((hall, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Hall Name and Status Badge */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{hall.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{hall.building}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${hall.availability === 'available'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-orange-500/10 text-orange-600'
                  }`}
              >
                {hall.availability === 'available' ? 'Available' : 'Maintenance'}
              </span>
            </div>

            {/* Hall Details */}
            <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Capacity: <span className="font-semibold text-foreground">{hall.capacity} students</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Location: <span className="font-semibold text-foreground">{hall.floor}</span></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-primary/30">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="flex-1 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-red-500/30">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
