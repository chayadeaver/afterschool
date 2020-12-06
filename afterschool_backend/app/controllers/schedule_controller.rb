class ScheduleController < ApplicationController
    def index
        @schedules = Schedule.all 

        render json: @schedules, status: 200

    def show 
        @schedule = Schedule.find(params[:id])

        render json: @schedule, status: 200

     def create
        @schedule = Schedule.create(schedule_params)

        render json: @schedule, status: 200
     end
     
     def update
        @schedule = Schedule.find(params[:id])
        @schedule.update(schedule_params)
        render json: @schedule, status: 200
     end

     def destroy
        @schedule = Schedule.find(params[:id])
        @schedule.delete

        # render json: @schedule, status: 200
     end


     private

     def schedule_params
        params.require(:schedule).permit(:day :subject :content)
     end
end
