class Schedule < ApplicationRecord
    belongs_to :child, optional: true
end
