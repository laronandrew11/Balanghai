function GameDate(year, month, day){
	this.year=year;
	this.month=month;
	this.day=day;
	this.advanceDate=function(){
		if(this.day<30)
			this.day++;
		else {
			triggerTranslationQuest();
			this.day=1;
			if (this.month<12)
				this.month++;
			else {
				this.month=1;
				this.year++;
			}
		}
	}
}