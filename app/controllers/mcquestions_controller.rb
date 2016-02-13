class McquestionsController < ApplicationController
  before_action :set_mcquestion, only: [:show, :update, :destroy]

  # GET /mcquestions
  # GET /mcquestions.json
  def index
    @mcquestions = Mcquestion.all

    render json: @mcquestions
  end

  # GET /mcquestions/1
  # GET /mcquestions/1.json
  def show
    render json: @mcquestion
  end

  # POST /mcquestions
  # POST /mcquestions.json
  def create
    @mcquestion = Mcquestion.new(mcquestion_params)

    if @mcquestion.save
      render json: @mcquestion, status: :created, location: @mcquestion
    else
      render json: @mcquestion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mcquestions/1
  # PATCH/PUT /mcquestions/1.json
  def update
    @mcquestion = Mcquestion.find(params[:id])

    if @mcquestion.update(mcquestion_params)
      head :no_content
    else
      render json: @mcquestion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mcquestions/1
  # DELETE /mcquestions/1.json
  def destroy
    @mcquestion.destroy

    head :no_content
  end

  private

    def set_mcquestion
      @mcquestion = Mcquestion.find(params[:id])
    end

    def mcquestion_params
      params.require(:mcquestion).permit(:stem)
    end
end
