var randomposts_number = 1;
var randomposts_chars = 0;
var randomposts_details = 'no'
var randomposts_thumbnails = 'no'
var randomposts_comments = 'Comments';
var randomposts_commentsd = 'Comments Disabled';
var randomposts_current = [];
var total_randomposts = 0;
var randomposts_current = new Array(randomposts_number);

function randomposts(json) {
    total_randomposts = json.feed.openSearch$totalResults.$t
}
document.write('<script type=\"text/javascript\" src=\"http://101helper.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts\"><\/script>');

function getvalue() {
    for (var i = 0; i < randomposts_number; i++) {
        var found = false;
        var rndValue = get_random();
        for (var j = 0; j < randomposts_current.length; j++) {
            if (randomposts_current[j] == rndValue) {
                found = true;
                break
            }
        };
        if (found) {
            i--
        } else {
            randomposts_current[i] = rndValue
        }
    }
};

function get_random() {
    var ranNum = 1 + Math.round(Math.random() * (total_randomposts - 1));
    return ranNum
};
