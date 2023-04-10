"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var graphql_1 = require("../../generated/graphql");
var react_1 = require("react");
var childHeader_1 = require("../../components/childHeader/childHeader");
var comments_styles_1 = require("../comments/comments.styles");
var emptyPage_1 = require("../../components/empty-page/emptyPage");
var feedComment_1 = require("./feed-comment/feedComment");
var feedReply_1 = require("./feed-reply/feedReply");
var react_helmet_1 = require("react-helmet");
var loading_1 = require("../loading/loading");
var notFound_1 = require("../notFound/notFound");
var react_viewport_list_1 = require("react-viewport-list");
var hooks_1 = require("../../redux/hooks");
var useFetchMoreFeed_1 = require("../../hooks/useFetchMoreFeed");
var usePageView_1 = require("../../hooks/usePageView");
var Feed = function () {
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    var listRef = react_1.useRef(null);
    var parentRef = react_1.useRef(null);
    var _a = react_1.useState([]), items = _a[0], setItems = _a[1];
    var _b = react_1.useState(''), cursor = _b[0], setCursor = _b[1];
    var feedQuery = graphql_1.useGetFeedQuery({
        variables: {
            uid: user.id,
            first: 10,
            after: cursor
        },
        pause: constants_1.isServer()
    })[0];
    var fetchMore = useFetchMoreFeed_1.useFetchMoreFeed(user.id, setItems, feedQuery, cursor, setCursor).fetchMore;
    usePageView_1["default"]();
    // Scroll handler.
    var handleScroll = function (e) {
        e.stopPropagation();
        var target = e.target;
        if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
            console.log('fetching more');
            fetchMore();
        }
    };
    react_1.useEffect(function () {
        var error = feedQuery.error, data = feedQuery.data, fetching = feedQuery.fetching;
        if (error)
            console.log(error);
        if (!fetching && data) {
            var _data_1 = data.getFeed;
            setItems(function () { return _data_1.nodes; });
        }
    }, [feedQuery]);
    if (feedQuery.error)
        return React.createElement(notFound_1["default"], null);
    if (items.length <= 0) {
        return (React.createElement(react_1.Fragment, null,
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Feed"),
                React.createElement("meta", { name: "description", content: "Feed" }),
                React.createElement("link", { rel: "canonical", href: "" + constants_1.CURRENT_DOMAIN })),
            React.createElement(childHeader_1["default"], { text: "Feed", className: "feed-header" }),
            React.createElement(emptyPage_1["default"], { msg: "Your Feed is empty!" })));
    }
    return (React.createElement(react_1.Fragment, null,
        React.createElement(childHeader_1["default"], { text: "Feed", className: "feed-header" }),
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Feed"),
            React.createElement("meta", { name: "description", content: "Feed" }),
            React.createElement("link", { rel: "canonical", href: "" + constants_1.CURRENT_DOMAIN })),
        React.createElement(comments_styles_1.CommentParent, null,
            React.createElement("div", { className: "child", ref: parentRef, onScroll: handleScroll },
                React.createElement(react_viewport_list_1.ViewportList, { ref: listRef, viewportRef: parentRef, items: items }, function (item, index) {
                    return item.type === 'comment' ? (React.createElement(feedComment_1["default"], { key: index + item.id, id: item.id })) : (React.createElement(feedReply_1["default"], { key: index + item.id, id: item.id }));
                }),
                React.createElement("div", { className: "extra" }, feedQuery.fetching && React.createElement(loading_1["default"], null))))));
};
exports["default"] = Feed;
