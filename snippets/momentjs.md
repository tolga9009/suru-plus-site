```html
    <script src="javascript/moment.js"></script>
		<script>moment.locale('en-gb');</script>
		<script>
			moment.locale('en-gb');
			moment.relativeTimeThreshold('d', 25);
			moment.calendarFormat = function (myMoment, now) {
				var diff = myMoment.diff(now, 'days', true);
				var twoMonths = now.clone().subtract(2, 'month');
				var nextMonth = now.clone().add(1, 'month');

				var retVal = diff < -90 ? 'sameElse' :
					(twoMonths.month() === myMoment.month() && twoMonths.year() === myMoment.year()) ? 'twoMonths' :
						diff < -21 ? 'lastMonth' :
							diff < -20 ? 'twentyDaysAgo' :
								diff < -19 ? 'nineteenDaysAgo' :
									diff < -18 ? 'eighteenDaysAgo' :
										diff < -17 ? 'seventeenDaysAgo' :
											diff < -16 ? 'sixteenDaysAgo' :
												diff < -15 ? 'fiftenDaysAgo' :
													diff < -14 ? 'fourteenDaysAgo' :
														diff < -13 ? 'thirteenDaysAgo' :
															diff < -12 ? 'twelveDaysAgo' :
																diff < -11 ? 'elevenDaysAgo' :
																	diff < -10 ? 'tenDaysAgo' :
																		diff < -9 ? 'nineDaysAgo' :
																			diff < -8 ? 'eightDaysAgo' :
																				diff < -7 ? 'sevenDaysAgo' :
																					diff < -6 ? 'sixDaysAgo' :
																						diff < -1 ? 'lastWeek' :
																							diff < 0 ? 'lastDay' :
																								diff < 1 ? 'sameDay' :
																									diff < 2 ? 'nextDay' :
																										diff < 7 ? 'nextWeek' :
																											// introduce thisMonth and nextMonth
																											(myMoment.month() === now.month() && myMoment.year() === now.year()) ? 'thisMonth' :
																												(nextMonth.month() === myMoment.month() && nextMonth.year() === myMoment.year()) ? 'nextMonth' : 'sameElse';
				return retVal;
			};

			function ChooseDate(setDate)
			{
				moment(`${setDate}`, "YYYYMMDD").calendar(null,
				{
					sameElse: 'LL',
					twoMonths: '[2 months ago]',
					lastMonth: '[1 month ago]',
					twentyDaysAgo: '[20 days ago]',
					nineteenDaysAgo:  '[19 days ago]',
					eighteenDaysAgo: '[18 days ago]',
					seventeenDaysAgo: '[17 days ago]',
					sixteenDaysAgo: '[16 days ago]',
					fiftenDaysAgo: '[15 days ago]',
					fourteenDaysAgo: '[14 days ago]',
					thirteenDaysAgo: '[13 days ago]',
					twelveDaysAgo: '[12 days ago]',
					elevenDaysAgo: '[11 days ago]',
					tenDaysAgo: '[10 days ago]',
					nineDaysAgo: '[9 days ago]',
					eightDaysAgo: '[8 days ago]',
					sevenDaysAgo: '[7 days ago]',
					sixDaysAgo: '[6 days ago]',
					lastWeek: '[Last] dddd',
					lastDay: '[Yesterday]',
					sameDay: '[Today]',
					nextDay: '[Tomorrow]',
					nextWeek: 'dddd',
					thisMonth: '[This month on the] Do',
					nextMonth: '[Next month on the] Do'
				});
				return setDate;
			}
		</script>
```