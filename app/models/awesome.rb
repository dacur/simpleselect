
class Awesome

  include Mongoid::Document




  field :name, type: String

  field :isAwesome, type: Mongoid::Boolean

  field :whyAwesome, type: String


end

