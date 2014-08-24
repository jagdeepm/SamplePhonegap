var EmployeeView = function(employee) {
 
  this.initialize = function() {
        this.el = $('<div/>');
		this.detailsURL = /^#employees\/(\d{1,})/;
		this.el.on('click', '.add-location-btn', this.addLocation);
    };
 
  this.render = function() {
   alert("Hi");
     this.el.html(EmployeeView.template(employee));
     return this;
    };
  this.addLocation = function(event) {
    event.preventDefault();
    console.log('addLocation');
    navigator.geolocation.getCurrentPosition(
        function(position) {
            $('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
        },
        function() {
            alert('Error getting location');
        });
    return false;
  };
    this.initialize();
 
}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());