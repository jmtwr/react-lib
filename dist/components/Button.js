export var Button = function(props) {
    var children = props.children, onClick = props.onClick;
    return /*#__PURE__*/ React.createElement("button", {
        onClick: onClick
    }, children);
};
