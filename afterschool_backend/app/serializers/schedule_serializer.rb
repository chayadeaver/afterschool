class ScheduleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :weekday, :subject, :content
  belongs_to :child
end
