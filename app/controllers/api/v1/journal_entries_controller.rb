class Api::V1::JournalEntriesController < Api::ApplicationController
  before_action :authenticate_user!

  def index
    journal_entries = JournalEntry.order created_at: :desc
    render json: journal_entries
  end

  def create
    journal_entry = JournalEntry.new journal_entry_params
    journal_entry.user = current_user
    
    if journal_entry?
      journal_entry.save!
      render json: journal_entry
    else 
      


    
  end

  def show
    render json: journal_entry
  end


  private

  def journal_entry_params
    params.require(:journal_entry).permit(:feeling, :body)
  end

  def journal_entry
    journal_entry = JournalEntry.find params[:id]
  end

end
