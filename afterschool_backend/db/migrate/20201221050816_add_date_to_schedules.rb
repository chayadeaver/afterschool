class AddDateToSchedules < ActiveRecord::Migration[6.0]
  def change
    add_column :schedules, :date, :datetime
  end
end
