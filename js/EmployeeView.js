var EmployeeView = function(employee) {
 
  this.initialize = function() {
        this.el = $('<div/>');
		this.detailsURL = /^#employees\/(\d{1,})/;
    };
 
  this.render = function() {
     this.el.html(EmployeeView.template(employee));
     return this;
    };

    this.initialize();
 
}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());