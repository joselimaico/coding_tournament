/**
 * Report.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    location:{type:'json',required:true},
    description:{type:'string',required:true},
    placa:{type:'string'},
    date:{type:'string',columnType:'date',required:true},
    image:{type:'json',required:true},
    url:{type:'string',required:true},
    event: {
      collection:'event',
      via: 'userReport'
    },
    userMap:{
      model:'UserMap',

    }

  },

};

