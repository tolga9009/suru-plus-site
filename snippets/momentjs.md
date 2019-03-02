```html
    <script src="javascript/moment.js"></script>
		<script>moment.locale('en-gb');</script>
		<span class="date">
			<script>
			document.write(
				moment("20190311", "YYYYMMDD").calendar(null,
				{
 					sameDay : '[Today]', 
					nextDay : '[Tomorrow]', 
					nextWeek : 'dddd', 
					lastDay : '[Yesterday]', 
					lastWeek : '[Last] dddd', 
					thisMonth : '[This month on the] Do', 
					nextMonth : '[Next month on the] Do', 
					sameElse : 'LL'
				})
			);
			</script>
		</span>
```