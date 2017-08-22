/**
 * filters everything from the hierarchy based on the contentType id
 * @param  {Array<Object>} type      The type of item in the hierarchy desired
 * @param  {Object} hierarchy        response from contentful
 * @return {Array}                   filtered hierarchy
 */
const getByType = (type, hierarchy) => {
  return hierarchy.filter(hierItem => {
    return ('contentType' in hierItem.sys && hierItem.sys.contentType.sys.id === type);
  });
};

module.exports = {
  getByType,
};
