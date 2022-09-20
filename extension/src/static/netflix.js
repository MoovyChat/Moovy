var getReactNode = (root) => {
  if (root == null) {
    return null;
  }
  var keys = Object.keys(root);
  console.log(keys);
  var key = null;
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].startsWith('__reactInternalInstance')) {
      key = keys[i];
      break;
    }
  }
  return key ? root[key] : null;
};

var getPlayerApi = () => {
  try {
    return getReactNode(document.querySelector('.watch-video')).return
      .stateNode;
  } catch (e) {
    return undefined;
  }
};
