class AddWeekToSchedule < ActiveRecord::Migration[6.0]
  def change
    add_column :schedules, :week, :integer
  end
end
