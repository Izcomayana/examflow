import { ConflictDetectionWidget } from "@/components/(dashboard)/conflict-detection";
import { QuickActions } from "@/components/(dashboard)/quick-actions";
import { RecentTimetables } from "@/components/(dashboard)/recent-timetable";
import { ScheduleAnalytics } from "@/components/(dashboard)/schedule-analytics";
import { ScheduleGeneratorCard } from "@/components/(dashboard)/schedule-generator";
import { StatsCards } from "@/components/(dashboard)/stats-cards";

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8 pt-24">
      <StatsCards />
      {/* <ScheduleGeneratorCard /> */}
      <QuickActions />
      <ScheduleAnalytics />
      <RecentTimetables />
      <ConflictDetectionWidget />
    </div>
  )
}
