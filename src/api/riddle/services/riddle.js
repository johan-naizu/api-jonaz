'use strict';

/**
 * riddle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::riddle.riddle');
