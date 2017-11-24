Capsweb = new Backbone.Marionette.Application();
Capsweb.SearchBar = function () {
    var SearchBar = {};

    var Layout = Backbone.Marionette.Layout.extend({
        template: "#searchbar-template",
        regions: {
            search: '#backbone-search',
            results: '#info-js-hook'
        }
    });

    SearchBar.initializeLayout = function(){
        SearchBar.layout = new Layout();
        SearchBar.layout.on("show", function(){
            Capsweb.vent.trigger("layout:rendered");

        });
        Capsweb.content.show(Capsweb.SearchBar.layout);
    };

    SearchBar.alert = function(message){
        alert(message);
    };

    SearchBar.privateAlert = function(message){
        privateMessage(message);
    };
    var privateMessage = function(message){
        alert('private: ' + message);

    };

    return SearchBar;

}();

Capsweb.addInitializer(function(){
    Capsweb.SearchBar.initializeLayout();
});

var result = Backbone.Model.extend();
var results = Backbone.Collection.extend({
    model: result,
    initialize: function(){
        var self = this;

        this.maxResults = 40;
        this.page = 0;
        this.loading = false;
        this.totalItems = null;

    },

    search: function(searchTerm){
        this.page = 0;
        var self = this;
        this.fetchResults(searchTerm, function(results){
            console.log(results);

        });
    },

    fetchResults: function(searchTerm, callback){
        if(this.loading) return true;
        this.loading = true;
        var self = this;
        Capsweb.vent.trugger("search:start");
        var query = encodeURIComponent(searchTerm) + 'preamble=select-shows' + '&constraint=like-name-' + searchTerm;
        $.ajax({
            url: "/general-js-query?" + query,
            dataType: "jsonp",
            success: function (res) {
                Capsweb.vent.trigger("search:stop");
                if(res.totalItems == 0){
                    callback([]);
                    return [];

                }
                if(res.items){
                    self.page++;
                    self.totalItems = res.totalItems;
                    var searchResults = [];
                    _.each(res.items, function (item){
                        searchResults[searchResults.length] = new result({
                            id: items[0],
                            title: items[1]

                        });
                    });
                    callback(searchResults);
                    self.loading = false;
                    return searchResults;
                }
                else if (res.error){
                    Capsweb.vent.trigger("search:error");
                    self.loading = false;

                }
            }
            });
            
    }
});
