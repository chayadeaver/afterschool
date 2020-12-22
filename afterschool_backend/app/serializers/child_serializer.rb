class ChildSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :grade
end
