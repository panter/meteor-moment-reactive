# moment-reactive


`meteor add panter:moment-reactive`

In a reactive context you can use now `momentReactive` instead of `moment` and it will invalidate this context every second.

##Usage:

You can use this in your template helpers to display the current time:

````

Template.myTemplate.helpers({
	now() {
		return momentReactive()
	},
	postMoment() {
		return momentReactive(this.post.createdAt);
	}
}

// global helper is also possible

Template.registerHelper("momentReactive", momentReactive);

<template name="myTemplate">
	<p>The current time is {{now}}</p>
	<p>In another format: {{now.format "DD.MM.YYYY HH:mm:ss"}}</p>
	<p>This post was written {{postMoment.fromNow}}</p>
</template>

````

