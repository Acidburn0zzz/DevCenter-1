// SPIN.JS
var opts = {
    lines: 13,
    length: 28,
    width: 14,
    radius: 42,
    scale: 1,
    corners: 1,
    color: '#000',
    opacity: 0.20,
    rotate: 0,
    direction: 1,
    speed: 1.0,
    trail: 70,
    fps: 20,
    zIndex: 2e9,
    className: 'spin',
    top: '35%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute'
};

var spinner = new Spinner(opts);

// ELASTICSEARCH
var MFPSEARCH = {
    client: null,
    queryTerm: null,
    body: {},
    pageSize: 10,
    total: 0,
    from: 0,
    getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    executeSearch: function() {
        spinner.spin(document.getElementById('searchResults'));

        var _this = this;
        this.client.search({
            "body": this.body
        }).then(function(body) {
            console.log(body);
            _this.total = body.hits.total;
            $('#queryTerm').html(_this.total + " results");
            $('#search-input').val(_this.queryTerm);
            var searchResultTemplate = $.templates("#searchResultTemplate");
            $('#searchResults').html('');
            $('html,body').scrollTop(0);

            if (_this.total > 0) {
                $.each(body.hits.hits, function(index, result) {
                    result._source.highlight = result.highlight;
                    $('#searchResults').append(searchResultTemplate.render(result._source));
                });
                $('#searchNextBtn').show();
                $('#searchPreviousBtn').show();
            } else {
                $('#searchResults').html('No results were found. Try refining your search.');
                $('#searchNextBtn').hide();
                $('#searchPreviousBtn').hide();
            }
            if (_this.from > 0) {
                $('#searchPreviousBtn').removeClass('disabled');
            } else {
                $('#searchPreviousBtn').addClass('disabled');
            }

            if (_this.from + _this.pageSize > _this.total) {
                $('#searchNextBtn').addClass('disabled');
            } else {
                $('#searchNextBtn').removeClass('disabled');
            }
            spinner.stop();
        });
    },
    nextPage: function() {
        if (_this.from + _this.pageSize <= _this.total) {
            this.from = this.from + this.pageSize;
            this.body.from = this.from;
            this.executeSearch();
        }
    },
    previousPage: function() {
        if (_this.from > 0) {
            this.from = this.from - +this.pageSize;
            this.body.from = this.from;
            this.executeSearch();
        }
    },
    updateFilters: function() {
        this.body.filter = {
            "bool": {
                "must": []
            }
        };
        var mustArray = this.body.filter.bool.must;
        var selectedVersions = $('#versions option:selected');
        if (selectedVersions.length > 0) {
            var versionsArray = [];
            $.each(selectedVersions, function(index, result) {
                versionsArray[index] = result.value;
            });
            mustArray.push({
                "terms": {
                    "version": versionsArray
                }
            });
        }
        var selectedType = $('#document-type option:selected');
        if (selectedType.length > 0) {
            var typesArray = [];
            $.each(selectedType, function(index, result) {
                typesArray[index] = result.value;
            });
            mustArray.push({
                "terms": {
                    "type": typesArray
                }
            });
        }
        var selectedPlatforms = $('#platforms option:selected');
        if (selectedPlatforms.length > 0) {
            var platformsArray = [];
            $.each(selectedPlatforms, function(index, result) {
                platformsArray[index] = result.value;
            });
            mustArray.push({
                "bool": {
                    "should": [{
                        "terms": {
                            "relevantTo": platformsArray
                        }
                    }, {
                        "terms": {
                            "tags": platformsArray
                        }
                    }]
                }
            });
        }
        this.executeSearch();
    },
    init: function() {
        this.client = new $.es.Client({
            protocol: 'https',
            hosts: 'mfpsearch.mybluemix.net'
        });
        this.queryTerm = this.getParameterByName('q');
        if (this.queryTerm !== null) {
            this.body = {
                "query": {
                    "multi_match": {
                        "query": this.queryTerm,
                        "operator": "and",
                        "fields": ["title", "content", "author.name"],
                        "fuzziness": "AUTO"
                    }
                },
                "highlight": {
                    "fields": {
                        "title": {},
                        "content": {}
                    }
                }
            };
            this.executeSearch();
            _this = this;
            $('#searchNextBtn a').bind('click', function() {
                _this.nextPage();
            });
            $('#searchPreviousBtn a').bind('click', function() {
                _this.previousPage();
            });
        }
    }
};

$(function() {
    $("#filters").show();
    MFPSEARCH.init();
    $('#document-type').multiselect({
        nonSelectedText: "Document type",
        onChange: function(option, checked, select) {
            MFPSEARCH.updateFilters();
        }
    });
    $('#platforms').multiselect({
        nonSelectedText: "Platforms",
        onChange: function(option, checked, select) {
            MFPSEARCH.updateFilters();
        }
    });
    $('#versions').multiselect({
        nonSelectedText: "Versions",
        onChange: function(option, checked, select) {
            MFPSEARCH.updateFilters();
        }
    });
});
