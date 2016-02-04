
let dep = null;
// make it usable on the server, if server-side tracker is used
if(typeof Tracker !== 'undefined' && Tracker !== null) {
	dep = new Tracker.Dependency;
}

momentReactive = function(...args) {
	if(dep) {
		dep.depend();
	}
	return moment.apply(moment, args);
}
if(dep) {
	Meteor.startup(function(){
		Meteor.setInterval(function() {
			dep.changed();
		}, momentReactive.interval);
	});
}

momentReactive.interval = 1000;
