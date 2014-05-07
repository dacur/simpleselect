class MainController < ApplicationController

	def saveawesome
		name = params[:name]
		isAwesome = params[:isAwesome]
		whyAwesome = params[:whyAwesome]
		
		# p name + ' | ' + stat + ' | ' + option

		t = Awesome.new(name: name, isAwesome: isAwesome, whyAwesome: whyAwesome)

		t.save
			
		render json: t
		
	end

	def showawesome
    	@awesomes = Awesome.all
  	end

  	def index
  		@awesomes = Awesome.all
  	end


end
