
function switchChannel(channelName) {
    console.log("Tuning into channel " + channelName);
    $('#channel-name').html(channelName);
    $('#location-name').html('<a href="https://map.what3words.com/upgrading.never.helps" target="_blank">upgrading.never.helps</a>');

    //highlights channel and removes previos highlight
    $('li').removeClass('selected');
    $('li:contains(' + channelName + ')').addClass('selected');

    //changes star to unfilled
    unfavoriteChatStar();
};

function favoriteChatStar() {
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
};

function unfavoriteChatStar() {
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
};

function selectTab(tabId) {
    $('#tab-bar button').removeClass('selected');
    console.log('Changing to tab ' + tabId);
    $(tabId).addClass('selected');
};

function emojiBox() {
    $('#emojis').toggle();
};