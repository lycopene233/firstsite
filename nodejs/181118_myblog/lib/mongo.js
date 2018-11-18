const config = require('config-lite')(__dirname);
const Mongolass = require('mongolass');
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')

const mongolass = new Mongolass();
mongolass.connect(config.mongodb);

mongolass.plugin('addCreatedAt', {
  afterFind: (results) => {
    results.forEach(item => {
      item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
    });
    return results;
  },
  afterFindOne: (result) => {
    if (result) {
      result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
    }
    return result;
  }
})

exports.User = mongolass.model('User', {
	name:     {type: 'string', required: true },
	password: {type: 'string', required: true },
	avatar:   {type: 'string', required: true },
	gender:   {type: 'string', enum: ['m', 'f', 'x'], default: 'x' },
	bio:      {type: 'string', required: true },
});

exports.User.index({name: 1 }, {unique: true }).exec();

exports.Post = mongolass.model('Post', {
	author:  {type: Mongolass.Types.ObjectId, required: true},
	title:   {type: 'string', required: true},
	content: {type: 'string', required: true},
	pv:      {type: 'number', default: 0},
});

exports.Post.index({author: 1, _id: -1}).exec();

