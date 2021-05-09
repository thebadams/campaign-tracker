const User = require('./User');
const Campaign = require('./Campaign');
const CampaignSession = require('./CampaignSession');
const Note = require('./Note');

User.hasMany(Campaign, {
  foreignKey: 'user_id',
});

Campaign.belongsTo(User, {
  foreignKey: 'user_id',
});

Campaign.hasMany(CampaignSession, {
  foreignKey: 'campaign_id',
});

CampaignSession.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
});

CampaignSession.hasMany(Note, {
  foreignKey: 'sesh_id',
});

Note.belongsTo(CampaignSession, {
  foreignKey: 'sesh_id',
});

module.exports = {
  User, Campaign, CampaignSession, Note,
};
